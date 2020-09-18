import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import styles from './main.style.tsx';

export default class AlarmPage extends Component {
    constructor() {
        super();
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
                    }}> EXAMPLE </Text>
            </View>
        )
    }
}
