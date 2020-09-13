import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class DigitalClock extends Component {

    constructor() {
        super();
        this.state = {currentTime: null}
        return;
    }

    getCurrentTime = (): void => {
        let hour: number = new Date().getHours();
        let minutes: number = new Date().getMinutes();
        let seconds: number = new Date().getSeconds();
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

        this.setState({currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm});
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
                <Text style = {styles.clockTitle}> CLOCK </Text>
                <Text style = {styles.clockInfo}> {this.state.currentTime} </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockTitle: {
    fontSize: 69,
    color: '#bd93f9'
  },
  clockInfo: {
    fontSize: 28,
    color: '#fff'
  }
});
