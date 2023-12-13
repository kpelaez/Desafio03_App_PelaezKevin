import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json';
import CategoryItem from '../components/CategoryItem';

const Categories = ({onSelectCategoryEvent}) => {

  const renderCategoryItem=({item})=>{
    return(
        <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
    )
  }

  return (
    <View style={styles.container}>
        <FlatList 
            styles={styles.container}
            renderItem ={({item}) => <CategoryItem 
                category = {item}
                />}
            data={categories}
            keyExtractor = {category => category} 
        />
      <Text>Categories</Text>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
    }
})