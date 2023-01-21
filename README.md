## Installation
Native Cli: npm install react-native-select-week-day

Expo: expo install react-native-select-week-day
## Demo


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