# react-native-select-week-day
This react native package returns index of clicked week day bubble. For example if you click on 'sun' it will return '0' and vice versa. you can use this package for week day picker in your code.
## Installation
Native Cli: npm install react-native-select-week-day

Expo: expo install react-native-select-week-day
## Demo
![Week Selector demo](https://user-images.githubusercontent.com/56933027/213881616-d645f679-1e1c-4ed6-8293-d70b45b339e8.gif)

## Sample code
```
<SelectWeekDay
    selectableDays={['sun','mon','sat','thu']}
    containerStyle={{justifyContent: 'center', alignItems: 'center',marginVertical: 60}}
    bubblesInitialColor={'green'}
    bubblesSelectedColor={'red'}
    bubbleStyle={{width: 50,height: 50}}
    onChange={(day)=>alert(day)}
/>
```
## Properties
|Props|Type|Default|Description|
|---|---|---|---|
|selectableDays|String Array|['Sun','Mon','Tue','Wed','Thu','Fri','Sat']|Make sure pass only three character string element in an array, otherwise it will not work.|
|containerStyle|Object|null|
|bubbleStyle|Object|{justifyContent: 'center', alignItems: 'center', borderRadius:75, padding: 10, margin: 5,backgroundColor: 'gray'}|
|bubbleTextStyle|Object|{color: 'white'}|
|bubblesInitialColor|String|'blue'|
|bubblesSelectedColor|String|'red'|
|onChange|Function|null|It will return index of clicked bubble