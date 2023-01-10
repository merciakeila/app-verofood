/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'components/index';

import Colors from 'constants/Colors';
import AuthScreen from 'screens/Auth';
import LoginScreen from 'screens/Login';
import ModalScreen from 'screens/ModalScreen';
import NotFoundScreen from 'screens/NotFound';
import HomeScreen from 'screens/Home';
import ProfileScreen from 'screens/Profile';
import SecurityScreen from 'screens/Security';
import LoansScreen from 'screens/Loans';
import LendScreen from 'screens/Lend';
import LendNewUserScreen from 'screens/LendNewUser';
import LendNewLoanScreen from 'screens/LendNewLoan';
import LendNewLoanSuccessScreen from 'screens/LendNewLoanSuccess';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from 'types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={AuthScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Member" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const LendStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lend" component={LendScreen} options={{headerShown: false}} />
      <Stack.Screen name="LendNewUser" component={LendNewUserScreen} options={{title: 'Cadastrar novo usuário' }} />
      <Stack.Screen name="LendNewLoan" component={LendNewLoanScreen} options={{title: 'Cadastrar novo empréstimo' }} />
      <Stack.Screen name="LendNewLoanSuccess" component={LendNewLoanSuccessScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
      <Stack.Screen name="Security" component={SecurityScreen} options={{title: 'Alterar Senha' }} />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: Colors.white,
          height: 54
        },
        tabBarLabelStyle: {
          marginBottom: 5
        }
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="bar-chart" color={color} />,
          headerShown: false,
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Modal', {'teste': '123'})} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
              <FontAwesome name="code" size={25} color={Colors.light.text} style={{ marginRight: 15 }} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="LendStack"
        component={LendStackScreen}
        options={{
          headerShown: false,
          title: 'Emprestar',
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          title: 'Empréstimos',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="handshake-o" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-o" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -6 }} {...props} />;
}
