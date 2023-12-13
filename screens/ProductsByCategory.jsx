import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search';

const ProductsByCategory = ({category, returnHomeHandlerEvent}) => {
  
  const [productsByCategory, setProductsByCategory] = useState();
  const [search, setSearch] = useState('');

  useEffect(()=>{
    const productsFilterByCategory = products_data.filter(product => product.category == category)
    const productsFiltered = productsFilterByCategory.filter(product => product.title.toLowerCase().includes(search.toLocaleLowerCase()))
    setProductsByCategory(productsFiltered)
  }, [category, search])

  const renderProductItem = ({item}) =>{
    return (
      <ProductItem item={item}/>
    )
  }
  
  const onSearch = (search) =>{
    setSearch(search)
  }

  return (
    <>
      <Header title="Productos" returnHomeHandlerEvent={returnHomeHandlerEvent}/>
      <Search onSearchHandlerEvent={onSearch}/>
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={item=>item.id}
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({

})