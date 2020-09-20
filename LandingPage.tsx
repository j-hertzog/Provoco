import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import styles from './main.style';

export default class LandingPage extends Component {
    
    dayArray: Array<String>;
    monthArray: Array<String>;
    timer: number;

    constructor() {
        //@ts-ignore
        super(); 
        this.state = {currentTime: null, currentDay: null};
        this.dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
        this.timer = 0;
        return;
    }

    getCurrentTime = (): void => {
        let hour: number = new Date().getHours();
        let minutes: number = new Date().getMinutes();
        let seconds: number = new Date().getSeconds();
        let weekDay: String = this.dayArray[new Date().getDay()];
        let month: String = this.monthArray[new Date().getMonth()];
        let date: Number = new Date().getDate();
        let am_pm = 'pm';

        if(hour > 12) 
            hour = hour-12;
        else
            am_pm = 'am';

        if(hour == 0) 
            hour = 12;

        if(minutes/10 < 1) 
            minutes = '0' + minutes;

        if(seconds/10 < 1) 
            seconds = '0' + seconds;

        this.setState({currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm, currentDay: weekDay + ', ' + month + ' ' + date});
        return;
    }

    componentDidMount(): void {
        //setInterval waits a second before starting
        this.getCurrentTime();
        this.timer = setInterval(() => {
            this.getCurrentTime();
        }, 1000);
        return;
    }

    componentWillUnmount(): void {
        clearInterval(this.timer);
        return;
    }
    onCreatePressed = (): void => {
        this.props.navigation.navigate('Alarms');
    }

    render = () => {
        return ( 
            <View style={styles.container}>
            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style = {styles.clockTitle}> Provoc 
                    <Image source={require('./sun_icon.png')} style = {{ width: 65, height: 60,}} />
                </Text>
            </View>
            <View>
                <Text style = {styles.clockInfo}> {this.state.currentTime} </Text>
            </View>
                <Text style = {styles.dateInfo}> {this.state.currentDay} </Text>
                <View style = {styles.mainTimer}> 
                    <Text style = {styles.timerStatus}> No Alarms Set </Text>
                </View>

                <View style = {styles.buttonWrapper}>
                    <Button title = "Create Alarm" color="white" onPress={()=> this.onCreatePressed() }/>
                </View>
                <View style = {styles.buttonWrapper}>
                    <Button title = "Leaderboard" color="white"></Button>
                </View>
                <View style = {styles.buttonWrapper}>
                    <Button title = "My Profile" color="white"></Button>
                </View>
                <View>
                    <Text style = {styles.balance}>Current Balance: $0.00</Text>
                </View>
            </View>
        )
    }
}
