import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import styles from './main.style';

export class Alarm {
    title: String;
    year: Number;
    month: Number;
    day: Number;
    hour: Number;
    minute: Number;
    
    constructor(t: String, y: Number, mo: Number, d: Number, h: Number, mi: Number){
        this.title = t;
        this.year = y;
        this.month = mo;
        this.day = d;
        this.hour = h;
        this.minute = mi;
    }
    
}

export default class AlarmPage extends Component {
    testAlarm: Alarm | null;

    constructor() {
        //@ts-ignore
        super();
        this.testAlarm = new Alarm("simp alarm", 0,0,0,0,0);
    }

    componentDidMount(): void {

    }

    componentWillUnmount(): void {
    }

    render = () => {
        return ( 
            <View style={styles.container}>
                <Text style ={{
                    fontSize: 65,
                    letterSpacing: 10,
                    color: '#bd93f9',
                    paddingBottom: 30,
                    shadowOpacity: 0.5,
	                }}> EXAMPLE 
                </Text>
                <Button title = "Return Alarm" onPress={()=> this.props.navigation.navigate('Home', { Alarm: this.testAlarm})}/> 
            </View>
        )
    }
}
