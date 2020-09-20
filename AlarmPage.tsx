import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import styles from './main.style';

export default class AlarmPage extends Component {
    constructor() {
        //@ts-ignore
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
		}}> EXAMPLE 
		</Text>
		    <Button title = "Set"></Button>
            </View>
        )
    }
}
