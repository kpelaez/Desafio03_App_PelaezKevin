// Importaciones funcionales de componente
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Importaciones de screens
import Categories from '../screens/Categories';
import ProductsByCategories from '../screens/ProductsByCategory';
import ProductDetail from '../screens/ProductDetail';
import Header from "../components/Header";


const Stack = createNativeStackNavigator();


const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Categorias"
            screenOptions={
                ({navigation, route})=>({
                    header: ()=> <Header title={route.name} navigation={navigation}/>
                })
            }
        >

            <Stack.Screen 
                name= "Categorias"
                component = {Categories}
            />

            <Stack.Screen 
                name= "Productos"
                component = {ProductsByCategories}
            />
            
            <Stack.Screen 
                name= "Detalle del producto"
                component = {ProductDetail}
            />


        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigator
