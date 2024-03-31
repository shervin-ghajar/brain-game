import { Platform } from 'react-native';

const FontFamily = {
    font: Platform.OS == "android" ? "serif" : "Cochin"
}
export default FontFamily.font