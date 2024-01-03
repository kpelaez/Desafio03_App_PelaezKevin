import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator    
        initialRouteName="Carrito"
        screenOptions={
            (({navigation, route}) =>({
                    header: ()=><Header title={route.name} navigation={navigation}/>
            }))
        }
    >
        <Stack.Screen
            name="Carrito"
            component={Cart}
        />
    </Stack.Navigator>    
  )
}

export default CartNavigator

const styles = StyleSheet.create({})