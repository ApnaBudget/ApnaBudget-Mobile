import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wpToDP } from '../utils/ResponsiveScreen'

const ExpenseType = ({ icon, value, type }) => {
  const expenseColor = ["#E53935", "#00897B", "#212121"]
  
  let color = "#000000"

  if(type === "Expenses") {
    color = expenseColor[0]
  } else if(type === "Balance") {
    color = expenseColor[1]
  } else color = expenseColor[2]

  return (
    <View style={styles().container}>
      {icon}
      <View style={styles().contentWrapper}>
        <Text style={styles(color).expenseDetail}>{value}</Text>
        <Text style={styles().description}>{type}</Text>
      </View>
    </View>
  )
}

export default ExpenseType

const styles = ( expenseColor ) => StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: wpToDP(1.75),
    },

    contentWrapper: {
        alignItems: 'center',
    },

    expenseDetail: {
        color: expenseColor,
        fontFamily: 'medium'
    },

    description: {
        fontFamily: 'regular'
    },
})