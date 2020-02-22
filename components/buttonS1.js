import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const ButtonS1 = ({ btnContainerStyle, imageSource, onPress, text, textColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...styles.btnContainer, btnContainerStyle }}>
            <Image style={{ ...styles.img }} source={imageSource} />
            <Text style={{ ...styles.text, color: textColor }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}


const styles = {
    btnContainer: {
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
    },
    text: {
        color: "white",
        fontFamily: "serif",
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 15,
    }

}

export { ButtonS1 };
