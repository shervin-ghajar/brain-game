import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const ButtonS2 = ({ onPress, text, textColor, imageSource, imageStyle, borderColor, btnContainerStyle }) => (
    <TouchableOpacity style={[styles.btnContainer, btnContainerStyle, borderColor ? { borderColor } : { borderWidth: 0 }]} onPress={onPress}>
        <Image style={{ ...styles.img, ...imageStyle }} source={imageSource} />
        {
            text ?
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ ...styles.text, color: textColor, }}>{text}</Text>
                </View>
                : null
        }
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
    text: {
        fontFamily: "serif",
        fontSize: 13,
        color: "white"
    }
}
export { ButtonS2 };
