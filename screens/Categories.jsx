import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json';
import CategoryItem from '../components/CategoryItem';
import Header from '../components/Header';

const Categories = ({navigation}) => {

  const renderCategoryItem=({item})=>{
    return(
        <CategoryItem category={item} navigation={navigation}/>
    )
  }

  return (
    <>
    {/* <Header title="Categories"/> */}
      <FlatList 
          style={styles.container}
          renderItem ={renderCategoryItem}
          data={categories}
          keyExtractor = {category => category} 
      />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        marginBottom:85,
    }
})