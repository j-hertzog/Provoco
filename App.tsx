import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

export default class LandingPage extends Component {
    
    constructor() {
        super();
        this.state = {currentTime: null, currentDay: null}
        this.dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
        return;
    }

    getCurrentTime = (): void => {
        let hour: number = new Date().getHours();
        let minutes: number = new Date().getMinutes();
        let seconds: number = new Date().getSeconds();
        let weekDay: string = this.dayArray[new Date().getDay()];
        let month: string = this.monthArray[new Date().getMonth()];
        let date: string = new Date().getDate();
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

    render = (): void => {
        return ( 
            <View style={styles.container}>
            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style = {styles.clockTitle}> Provoc 
                    <Image source={require('./sun_icon.png')} style = {{ width: 65, height: 60,}} />
                </Text>
            </View>
                <Text style = {styles.clockInfo}> {this.state.currentTime} </Text>
                <Text style = {styles.dateInfo}> {this.state.currentDay} </Text>
                <View style = {styles.mainTimer}> 
                    <Text style = {styles.timerStatus}> No Timers Set </Text>
                </View>

                <View style = {styles.buttonWrapper}>
                    <Button title = "Create Alarm" color="white"></Button>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#282a36',
    alignItems: 'center',
    paddingTop: 60, 
  },
  clockTitle: {
    fontSize: 65,
    letterSpacing: 10,
    color: '#bd93f9',
    paddingBottom: 30,
    shadowOpacity: 0.5,
  },
  dateInfo: {
    fontSize: 20,
    color: '#fff',
  },
  clockInfo: {
    width: '70%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: '#44475a',
    fontSize: 32,
    color: '#fff',
    letterSpacing: 5,
    marginBottom: 20,
  },
  buttonWrapper: {
    flex: 0.13,
    width: '65%',
    marginTop: 15,
    backgroundColor: '#44475a',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  mainTimer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    marginTop: 35,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: '#44475a',
  },
  timerStatus: {
    fontSize: 28,
    color: '#ff79c6',
    fontWeight: '300',
  },
  balance: {
    paddingTop: 20,
    fontSize: 15,
    color: 'white',
  }
});
