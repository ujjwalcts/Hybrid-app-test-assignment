

<h3 align="center">Weather Forecast APP</h3>
<p align="center">
 This app is displayed the weather Forecast report for the current location based on Geolocation coordinates. 
  The app is developed in Ionic React framework for Android a iOS. OpenWeatherMap weather API is used to fetch the
  Live data and persisted in local. User will receive the updated weather Forecast report for every 2 hours and WIFI
  connection & GPS enablement is mandated.
</p>

## Plugins for native API communication
Following custom custom plugins are implemented to interact with native platform.

<b>network-connection-type-plugin</b>
It provides the device connected network type. like WIFI, NON-WIFI

<b>geolocation-plugin</b>
It fetch the current Location coordinates.

<b>http-connection-plugin<b>
It makes a HTTP GET request to fetch the data.


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

Following the custom plugins are impleme

* **⚡️ Works with [Capacitor](https://capacitor.ionicframework.com/). ⚡️**

### Requirements :
NodeV8.6  and rpmV5.6. it supports yarn swell

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

##Capacitor:

### Install Ionic :

** Install Global Ionic **
```
Npm install ionic -g

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
Syncing App

**Every time performing build that changes you webdirectory ‘www’ or ‘build’.** 
```
npx cap copy :copy those changes down to your native projects.
 
```

### Future release update
Following features will be included in next release
* Weather forecast for next 7 days
* User can able to search the Weather report by location name  

