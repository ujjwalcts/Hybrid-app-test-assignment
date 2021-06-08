import React from 'react';
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

import {GeolocationCoordinates} from 'geolocation-plugin';
import { Http } from 'http-connection-plugin';
import { ConnectionType } from 'network-connection-type-plugin';

import { connect } from 'react-redux';
import { walk, locate, rainy, search, thumbsUp } from 'ionicons/icons';

const Home: React.FC = (props: any) => {

  const INTERVAL = 2*60*60*1000; //2 hours, time in milliseconds
  const appid = "5ad7218f2e11df834b0eaf3a33a39d2a";

  useIonViewWillEnter(async () => {
    await updateWeatherReport();
  });

  setInterval(async () => {
    await updateWeatherReport();
  }, INTERVAL);

  const updateWeatherReport = async () => {
    if (isPlatform('capacitor')) {
      const network = await ConnectionType.getNetworkType();
      console.log("network::", network.type);
      if (network.type === "WIFI") {
        const coordinates: any = await GeolocationCoordinates.getCoordinates();

        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${appid}`;
        const response = await Http.get({ url: url });

        const responseObj = JSON.parse(JSON.stringify(response));
        props.changeWeather(responseObj);

      } else {
        alert("WIFI is not connected. To get the current Weather Forecast, please connect with WIFI");
      }
    } else {
      alert("This is not a web Application.");
    }
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather Forecast App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Weather Forecast
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonItem className="ion-activated">
            
            <IonLabel><b>{props.currentWeather.data.name}</b></IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
          <IonIcon icon={locate} slot="start" />
            <IonLabel>Geo coordinates: <br />{props.currentWeather.data.coord.lat}, {props.currentWeather.data.coord.lon}</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={rainy} slot="start" />
            <IonLabel>Weather is <b>{props.currentWeather.data.weather[0].description}</b></IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={search} slot="start" />
            <IonLabel>Visibility {props.currentWeather.data.visibility}</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Temperature: {props.currentWeather.data.main.temp} F</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={thumbsUp} slot="start" />
            <IonLabel>Feels like: {props.currentWeather.data.main.feels_like} F</IonLabel>
          </IonItem>
          <IonItem className="ion-activated">
            <IonLabel>Minimum temperature: {props.currentWeather.data.main.temp_min} F</IonLabel>
          </IonItem>
          <IonItem className="ion-activated">
            <IonLabel>Maximum temperature: {props.currentWeather.data.main.temp_max} F</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
const mapStateToProps = (state: any) => {
  return {
    currentWeather: state.weather
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeWeather: (weather: any) => { dispatch({ type: 'UPDATE_WEATHER', playload: weather }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
