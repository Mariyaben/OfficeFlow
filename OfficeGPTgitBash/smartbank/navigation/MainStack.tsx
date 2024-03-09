import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import BhimUpiScreen from "../screens/BhimUpiScreen";
import ChooseAccountTypeScreen from "../screens/ChooseAccountTypeScreen";
import ConfirmPasscodeScreen from "../screens/ConfirmPasscodeScreen";
import CreatePasscodeScreen from "../screens/CreatePasscodeScreen";
import OneTimePasswordScreen from "../screens/OneTimePasswordScreen";
import PasscodeSetupScreen from "../screens/PasscodeSetupScreen";
import PhoneNumberScreen from "../screens/PhoneNumberScreen";
import PhoneVerifiedScreen from "../screens/PhoneVerifiedScreen";
import ResumeScreeningComponent from "../screens/ResumeScreeningComponent";
import SelectCountryScreen from "../screens/SelectCountryScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

export type MainStackParams = {
  Welcome: undefined;
  ChooseAccountType: undefined;
  SelectCountry: undefined;
  PhoneNumber: undefined;
  OneTimePassword: undefined;
  PhoneVerified: undefined;
  CreatePasscode: undefined;
  ConfirmPasscode: undefined;
  PasscodeSetup: undefined;
  BhimUPI: undefined;
  ResumeScreeningComponent: undefined;
};

const Stack = createNativeStackNavigator<MainStackParams>();

export function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="ChooseAccountType"
        component={ChooseAccountTypeScreen}
      />
      <Stack.Screen name="SelectCountry" component={SelectCountryScreen} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
      <Stack.Screen name="OneTimePassword" component={OneTimePasswordScreen} />
      <Stack.Screen name="PhoneVerified" component={PhoneVerifiedScreen} />
      <Stack.Screen name="CreatePasscode" component={CreatePasscodeScreen} />
      <Stack.Screen name="ConfirmPasscode" component={ConfirmPasscodeScreen} />
      <Stack.Screen name="PasscodeSetup" component={PasscodeSetupScreen} />
      <Stack.Screen name="BhimUPI" component={BhimUpiScreen} />
      <Stack.Screen name="ResumeScreeningComponent" component={ResumeScreeningComponent} />


    </Stack.Navigator>
  );
}

export type MainNavigationProps =
  NativeStackScreenProps<MainStackParams>["navigation"];
