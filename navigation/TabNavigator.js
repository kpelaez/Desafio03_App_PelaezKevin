import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ShopNavigator from "./ShopNavigator"
import CartNavigator from "./CartNavigator"
import { StyleSheet, View } from "react-native";
import { colors } from "../global/colors";
import { Entypo, AntDesign } from '@expo/vector-icons';


//Con esta linea instanciamos el objeto Tab
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}>
                <Tab.Screen
                    name="ShopStack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon:({focused}) =>{
                            return(
                                <View>
                                    <Entypo name="shop"
                                        size={24}
                                        color={focused?"#fff":"black"}
                                    />
                                </View>
                            );
                        }
                    }}
                />

                <Tab.Screen
                    name="CartStack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon:({focused}) =>{
                            return(
                                <View>
                                    <AntDesign name="shoppingcart"
                                        size={24}
                                        color={focused?"#fff":"black"}
                                    />
                                </View>
                            );
                        }
                    }}
                />
        </Tab.Navigator>

    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.primary,
        shadowColor: "#ccc",
        elevation:1,
        position:"absolute",
        bottom:25,
        left,
        right:20,
        borderRadius:20,
        height:90,
    }
})