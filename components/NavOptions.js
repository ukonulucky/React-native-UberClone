import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: 1,
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen:"RideScreen"
    },
    {
        id: 2,
        title: "Order Food",
        image: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
        screen:"EatScreen"
    }

]


const NavOptions = () => {
    const navigation = useNavigation()
  return (
      <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          horizontal
          renderItem={({ item }) => {
              return <TouchableOpacity
                  style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 `}
                  onPress={() => {
                      navigation.navigate(item.screen)
                  }}
              >
                <View>
                <Image
                      style={{
                          width: 120,
                          height: 120,
                          resizeMode:"contain"
                      }}
                      source={{
                       uri:item.image
                   }}
                    /> 
                      <Text style={ tw`mt-2 text-lg font-semibold`}>
                        { item.title }
                      </Text>
                      <Icon
                          type='antdesign'
                          name="arrowright"
                          color="white"
                          style={tw`p-2 w-10 bg-black rounded-full mt-4`}
                      />
                </View>
                
              </TouchableOpacity>
          }}
      />
      
  )
}

export default NavOptions

const styles = StyleSheet.create({})