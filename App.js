import { StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';
import TabNavigator from './navigation/TabNavigator';

//====== Importacion que ya no se usan por la modularizacion del programa=======
// import Categories from './screens/Categories'
// import { useState } from 'react';
// import ProductsByCategory from './screens/ProductsByCategory';
// import ProductDetail from './screens/ProductDetail';
// import Navigator from './navigation/Navigator';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular':require('./assets/font/Montserrat-Regular.ttf'),
    'Montserrat-Light':require('./assets/font/Montserrat-Light.ttf'),
    'Montserrat-Bold':require('./assets/font/Montserrat-Bold.ttf')
  });
  
  // const [categorySelected, setCategorySelected] = useState('');
  // const [productIdSelected,setProductIdSelected] = useState('');  

  if(!fontsLoaded){
    return <ActivityIndicator/>
  }

  // const onSelectCategory = (category)=>{
  //   setCategorySelected(category)
  // }
  // const onReturnHome = () =>{
  //   setCategorySelected("")
  // }
  // const onSelectProductId = (productId)=>{
  //   setProductIdSelected(productId)
  // }

  return (
    
    <TabNavigator/>
      
  );
}

/* {
          productIdSelected
          ?
          <ProductDetail productID={productIdSelected}/>
          :
          categorySelected 
          ?
          <ProductsByCategory category={categorySelected} onSelectProductEvent={onSelectProductId} returnHomeHandlerEvent={onReturnHome}/> 
            : 
            <Categories onSelectCategoryEvent={onSelectCategory}/>
        }  */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
