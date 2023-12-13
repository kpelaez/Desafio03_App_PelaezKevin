import { StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';
import Categories from './screens/Categories'
import { useState } from 'react';
import ProductsByCategory from './screens/ProductsByCategory';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular':require('./assets/font/Montserrat-Regular.ttf'),
    'Montserrat-Light':require('./assets/font/Montserrat-Light.ttf'),
    'Montserrat-Bold':require('./assets/font/Montserrat-Bold.ttf')
  });
  
  const [categorySelected, setCategorySelected] = useState('');


  if(!fontsLoaded){
    return <ActivityIndicator/>
  }

  const onSelectCategory = (category)=>{
    setCategorySelected(category)
  }

  const onReturnHome = () =>{
    setCategorySelected("")
  }

  return (
      <>
        {
          categorySelected ? <ProductsByCategory category={categorySelected} returnHomeHandlerEvent={onReturnHome}/> : <Categories onSelectCategoryEvent={onSelectCategory}/>
        }
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
