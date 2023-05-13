import React,{useState} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity as Button
} from 'react-native';

SelectWeekDay.defaultProps = {
    bubblesInitialColor: 'blue',
    bubblesSelectedColor: 'red',
    size: 20,
    onChange: null
}

export default function SelectMultipleWeekDays({
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
    const [dayChoose, setDayChoose] = useState([])
    
    const getColor = (index) => {
        if(dayChoose.length!=0){
            if(dayChoose.includes(index)) return bubblesSelectedColor
            else return bubblesInitialColor
        }else{
            return bubblesInitialColor
        }
    }
    function selectDays(endIndex) {
        let i = dayChoose[0]+1;
        while (i !== endIndex) {
          if (i === week.length) {
            i = 0;
          }
          setDayChoose([...dayChoose,i])
          i++;
        }
        setDayChoose([...dayChoose,endIndex])
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
                        onPress={()=>{
                            if(dayChoose.length>2) setDayChoose([week.indexOf(item),])
                            else if(dayChoose.length <= 1){
                                setDayChoose([...dayChoose,week.indexOf(item)])
                            }
                            else{
                                selectDays(week.indexOf(item))
                            }
                            onChange?onChange(dayChoose):null
                        }}
                        style={[{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:75,
                            padding: 10,
                            margin: 5,
                            height: size?size:null,
                            width: size?size:null,
                            backgroundColor: getColor(week.indexOf(item))
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