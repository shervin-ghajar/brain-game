import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const ButtonS1 = ({ btnContainerStyle, imageSource, imageStyle, }) => {
    console.warn(1, imageSource)
    return (
        <TouchableOpacity style={{ ...styles.btnContainer, btnContainerStyle }}>
            <Image style={{ ...styles.img, imageStyle }} source={imageSource} />
            <Text style={styles.text}>
                Press to Play
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
