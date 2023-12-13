import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {
  return (
    <Card>
        <Pressable style={styles.containerProductItem}>
            <Text style={styles.titleProductItem}>{item.title}</Text>
            <Image
                style={styles.imageProductItem}
                resizeMode='cover'
                source={{uri:item.images[0]}}
            />
        </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginVertical:20
    },
    titleProductItem:{
        fontFamily:'Monserrat-Regular',
        paddingVertical:20,
    },
    imageProductItem:{
        width:60,
    }
})