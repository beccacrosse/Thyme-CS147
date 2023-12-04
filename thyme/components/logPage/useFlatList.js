import { useState, useEffect} from "react";
import { FlatList, Text } from 'react-native';
import useMedLog from "./useMedLog";

export default function useFlatList(medsMap) { 
  return(
    <FlatList
        data={tracksMap}
        renderItem={({item}) => useMedLog(item)}
        keyExtractor={item => item.text}
      />
  )
}