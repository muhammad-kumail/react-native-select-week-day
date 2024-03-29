import React,{useState} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity as Button
} from 'react-native';

SelectWeekDay.defaultProps = {
    selectableDays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    bubblesInitialColor: 'blue',
    bubblesSelectedColor: 'red',
    size: 20,
    onChange: null
}

export default function SelectWeekDay({
    selectableDays,
    containerStyle,
    bubbleStyle,
    bubbleTextStyle,
    bubblesInitialColor,
    bubblesSelectedColor,
    noOfBubblesPerLine,
    size,
    onChange,
}){
    const [week, setWeek] = useState(['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);
    const [dayChoose, setDayChoose] = useState(-1)
    const isAvailable = (day) =>{
        return selectableDays.some(selectableDay => selectableDay.toLowerCase().substr(0,3) === day.toLowerCase())
    }
   return (
       <View style={[{},containerStyle]}>
          <FlatList
            numColumns={noOfBubblesPerLine?noOfBubblesPerLine:4}
            data={week}
            renderItem={({item})=>{
                return(
                    <Button
                        activeOpacity={0.6} 
                        onPress={()=>{setDayChoose(week.indexOf(item));onChange?onChange(week.indexOf(item)):null}}
                        disabled={!isAvailable(item)}
                        style={[{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:75,
                            padding: 10,
                            margin: 5,
                            height: size,
                            width: size,
                            backgroundColor: isAvailable(item)?(dayChoose!=-1 && dayChoose==week.indexOf(item)? bubblesSelectedColor :bubblesInitialColor):'gray'
                        },bubbleStyle]}>
                        <Text style={[{color: 'white'},bubbleTextStyle]}>{item}</Text>
                    </Button>
                );
            }}
            keyExtractor={(item)=>week.indexOf(item)}
          />
       </View>
   );
}