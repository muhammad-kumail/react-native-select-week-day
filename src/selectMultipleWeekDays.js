import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity as Button } from "react-native";

SelectMultipleWeekDays.defaultProps = {
  bubblesInitialColor: "blue",
  bubblesSelectedColor: "red",
  size: 20,
  onChange: null,
};

export default function SelectMultipleWeekDays({
  containerStyle,
  initialWeekDays = [],
  bubbleStyle,
  bubbleTextStyle,
  bubblesInitialColor,
  bubblesSelectedColor,
  noOfBubblesPerLine,
  size,
  onChange,
}) {
  const [week, setWeek] = useState([
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]);
  const [dayChoose, setDayChoose] = useState(initialWeekDays);
  var days = [];

  const getColor = (index) => {
    if (dayChoose.length != 0) {
      if (dayChoose.includes(index)) return bubblesSelectedColor;
      else return bubblesInitialColor;
    } else {
      return bubblesInitialColor;
    }
  };
  function toggleElement(arr, elem) {
    if (arr.includes(elem)) {
      return arr.filter((item) => item != elem);
    } else {
      return [...arr, elem];
    }
  }
  return (
    <View style={[{}, containerStyle]}>
      <FlatList
        numColumns={noOfBubblesPerLine ? noOfBubblesPerLine : 4}
        data={week}
        renderItem={({ item }) => {
          return (
            <Button
              activeOpacity={0.6}
              onPress={() => {
                setDayChoose(toggleElement(dayChoose, week.indexOf(item)));
                days = toggleElement(dayChoose, week.indexOf(item));
                onChange ? onChange(days) : null;
              }}
              style={[
                {
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 75,
                  padding: 10,
                  margin: 5,
                  height: size ? size : null,
                  width: size ? size : null,
                  backgroundColor: getColor(week.indexOf(item)),
                },
                bubbleStyle,
              ]}
            >
              <Text style={[{ color: "white" }, bubbleTextStyle]}>{item}</Text>
            </Button>
          );
        }}
        keyExtractor={(item) => week.indexOf(item)}
      />
    </View>
  );
}
