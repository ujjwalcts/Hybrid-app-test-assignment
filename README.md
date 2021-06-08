

<h1 align="center">Weather Forecast APP</h1>
<p align="left">
 This app is displayed the weather Forecast report for the current location based on Geolocation coordinates. 
  The app is developed in Ionic React framework for Android a iOS. OpenWeatherMap weather API is used to fetch the
  Live data and persisted in local. User will receive the updated weather Forecast report for every 2 hours and WIFI
  connection & GPS enablement is mandated.
</p>

## Custom Plugins for native API communication
Following custom plugins are implemented to interact with native platform.

#### network-connection-type-plugin
* It provides the device connected network type. like WIFI, NON-WIFI

#### geolocation-plugin
* It fetch the current Location coordinates.

#### http-connection-plugin
* It makes a HTTP GET request to fetch the data.


## Features
This is an Ionic React. Following features are included:
* Capacitor
* View base Responsive Design
* Redux
* Typescript
* Netowrk Type
* HTTP Rest API
* GPS
* Jest setup
* Test cases



*⚡️ Works with [Capacitor](https://capacitor.ionicframework.com/). ⚡️*

### Requirements :
NodeV8.6  and rpmV5.6. it supports yarn as well

### Platforms

#### iOs Development:
Xcode 11 or above
Ionic Appflow to build for iOS even if you're on MAC
Additionally Cocoapods required(sudo gem install cocoapods)
Once you have CocoaPods installed, update your local repo by running ‘pod repo update’

#### Android Development:
Java 8 JDK.Java 9 does not work at the moment.
requires the Android SDK installed with Android Studio.
Capacitor supports Android 5.0 (Lollipop) or above

## Capacitor:

### Install Ionic :

** Install Global Ionic **
```
npm install ionic -g

```

### Install or Adding Capacitor: 

**Start New Ionic React Project**

```
    ionic start <projectname> <projectType> —capacitor
```



**Existing Ionic Project**

navigate to Inside App Folder : cd <ProjectFolder>  — created ionic project Folder

ionic integrations enable capacitors

**Initialise Capacitor**
```
 npx cap init <appName> <appId>

```
**Build Ionic App :** 

```
ionic build (at least once before adding platform.)
 
```
**Add Platforms:** 

```
ionic capacitor add <Platform(android, ios)>
 
```
**Open IDE to build, run and Deploy.** 
```
ionic capacitor build <platform>
 
```


 
 
### Future release update
Following features will be included in next release
* Weather forecast for next 7 days
* User can able to search the Weather report by location name  

