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
