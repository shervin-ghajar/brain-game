import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import {
  LoginScreen,
  SignupScreen,
  ForgotPasswordScreen,
  CheckTokenScreen,
  ResetPasswordScreen,
  ConfirmationScreen
} from '../screens/stacks';


const AuthStack = createAppContainer(
  createStackNavigator({
    Login: LoginScreen,
    SignUp: SignupScreen,
    ForgotPassword: ForgotPasswordScreen,
    CheckToken: CheckTokenScreen,
    ResetPassword: ResetPasswordScreen,
    Confirmation:ConfirmationScreen
  },
    {
      headerMode: 'none',
      initialRouteName: 'Login'
    }
  )
);


export default AuthStack;