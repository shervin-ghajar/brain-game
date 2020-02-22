import React, { Component } from 'react';
import { View } from 'react-native';
import { ButtonS1 } from '../components';
import { introColor } from '../assets/colors';
//---------------------------------------------------------------------------------
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <View style={styles.view}>
                <ButtonS1 imageSource={require("../assets/images/play.png")} />
            </View>
        );
    }
}

const styles = {
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#032e50"
    }
}

export { Home }