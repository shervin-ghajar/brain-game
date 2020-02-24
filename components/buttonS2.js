import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

const ButtonS2 = ({ onPress, imageSource, borderColor }) => (
    <TouchableOpacity style={[styles.btnContainer, { borderColor }]} onPress={onPress}>
        <Image style={{ ...styles.img }} source={imageSource} />
    </TouchableOpacity>
);

const styles = {
    btnContainer: {
        alignItems: 'center',
        borderColor: "lightgray",
        borderRadius: 5,
        borderWidth: 2,
        padding: 5,
    },
    img: {
        width: 50,
        height: 50,
    },
}
export { ButtonS2 };
