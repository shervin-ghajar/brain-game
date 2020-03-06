import { Platform } from 'react-native';

const FontFamily = {
    font: Platform.OS == "android" ? "serif" : "arial"
}
export default FontFamily.font