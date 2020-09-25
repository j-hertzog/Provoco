import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import Alarm, { alarmData } from './CountdownTimer'
import styles from './main.style';

export interface State {
    currentTime: String,
    currentDay: String,
    nextAlarm: String,
    alarmName: String,
    alarmDetails: String,
}

export default class LandingPage extends Component<{}, State> {
    currAlarm: Alarm;    
    dayArray: Array<String>;
    monthArray: Array<String>;
    timer: number;
    alarmTimer: number;

    constructor() {
        //@ts-ignore
        super(); 

        //initializing state
        this.state = {
            currentTime: "",
            currentDay: "",
            nextAlarm: "No Alarms Set",
            alarmName: "",
            alarmDetails: "",
        };
        this.currAlarm = new Alarm(undefined);
        this.dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                         'Thursday', 'Friday', 'Saturday', 'Sunday'];

        this.monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                           'August', 'September', 'October', 'November', 'December',];
        this.timer = 0;
        this.alarmTimer = 0;
        return;
    }

    getCurrentTime = (): void => {
        //current time data
        let hour: number = new Date().getHours();
        let minutes: number = new Date().getMinutes();
        let seconds: number = new Date().getSeconds();
        let mText: String = minutes.toString();
        let sText: String = seconds.toString();

        //current day data
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
            mText = '0' + minutes;

        if(seconds/10 < 1) 
            sText = '0' + seconds;

        this.setState({currentTime: hour + ':' + mText + ':' + sText + ' ' + am_pm, 
                       currentDay: weekDay + ', ' + month + ' ' + date});
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
        clearInterval(this.alarmTimer);
        return;
    }

    onCreatePressed = (): void => {
        this.props.navigation.navigate('Alarms', {});
    }

    createTestAlarm = (): void => {

        const example: alarmData = {
            'name': 'Test Alarm',
            'details': 'this a test alarm... lorem ipsum latin latin latin latin latin latin latin latin latin',
            'second' : 0,
            'minute' : 30,
            'hour' : 9 ,
            'day' : 4,
            'month' : 9, //october, starts indexing at 0
            'year' : 2020,
        };

        this.currAlarm = new Alarm(example);

        this.setState({nextAlarm: this.currAlarm.countDown(example), 
            alarmName: example['name'] , alarmDetails: example['details']});

        this.alarmTimer = setInterval(() => {
            this.setState({nextAlarm: this.currAlarm.countDown(example)});
            console.log(this.state.nextAlarm);
        }, 1000);
        console.log(this.alarmTimer);
    }

    removeTestAlarm = (): void => {
        clearInterval(this.alarmTimer);
        this.currAlarm = new Alarm(undefined);
        this.setState({nextAlarm: "No Alarms Set", alarmName: '', alarmDetails: ''});
    }

    render = () => {
        return ( 
            <View style={styles.container}>
                <View style = {{flexDirection: 'row', justifyContent: 'center', flex: 0.15}}>
                    <Text style = {styles.clockTitle}> Provoc 
                        <Image source={require('../img/sun_icon.png')} style = {{ width: 65, height: 60,}} />
                    </Text>
                </View>
                <View><Text style = {styles.clockInfo}> {this.state.currentTime} </Text></View>
                <Text style = {styles.dateInfo}> {this.state.currentDay} </Text>
                <View style = {styles.mainTimer}> 
                    <Text style = {styles.alarmName}>{this.state.alarmName}  </Text>
                    <Text style = {styles.timerStatus}>{this.state.nextAlarm}  </Text>
                    <Text style = {styles.alarmDetails}>{this.state.alarmDetails}  </Text>
                </View>
                <View style = {styles.buttonWrapper}>
                    <Button title = "Create Alarm" color="white" onPress={()=> this.onCreatePressed() }/>
                </View>
                <View style = {styles.buttonWrapper}>
                    <Button title = "Add Test Timer" color="white" onPress={()=> this.createTestAlarm()}></Button>
                </View>
                <View style = {styles.buttonWrapper}>
                    <Button title = "Clear Timer" color="white" onPress={()=> this.removeTestAlarm()}></Button>
                </View>
                <View>
                    <Text style = {styles.balance}>Current Balance: $0.00</Text>
                </View>
            </View>
        )
    }
}
