import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import FontFamily from '../assets/fonts';

const ButtonS1 = ({ btnContainerStyle, imageSource, imageStyle, onPress, text, textColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...styles.btnContainer, btnContainerStyle }}>
            <Image style={{ ...styles.img, ...imageStyle }} source={imageSource} />
            {
                text ?
                    <Text style={{ ...styles.text, color: textColor }}>
                        {text}
                    </Text> : null
            }

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
        fontFamily: FontFamily.font,
        fontWeight: "bold",
        fontSize: 17,
        // marginVertical: 5,
        textAlign: "center",
        lineHeight: 30,
        textTransform: "uppercase"
    }

}

export { ButtonS1 };
