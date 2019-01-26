
# react-native-cz-loading

## Getting started

`$ npm install react-native-cz-loading --save`

### Mostly automatic installation

`$ react-native link react-native-cz-loading`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-cz-loading` and add `RNCzLoading.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCzLoading.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.chenzhe.loading.RNCzLoadingPackage;` to the imports at the top of the file
  - Add `new RNCzLoadingPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-cz-loading'
  	project(':react-native-cz-loading').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-cz-loading/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-cz-loading')
  	```


## Usage
```javascript
import RNCzLoading from 'react-native-cz-loading';

// TODO: What to do with the module?
RNCzLoading;
```
  