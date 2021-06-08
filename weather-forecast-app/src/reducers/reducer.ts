

const iState ={
    // locationName: "test",
    weather: {
        "data": {
            "weather": [{
                "description": ""
            }],
            "coord": {
                "lon": 0,
                "lat": 0
            },
            "main": {
                "pressure": 0,
                "temp_max": 0,
                "humidity": 0,
                "temp": 0,
                "feels_like": 0,
                "temp_min": 0
            },
            "sys": {
                "sunset": 0,
                "country": "US",
                "sunrise": 0
            },
            "name": "",
            "visibility": 0,
        }
    }
}

const reducer = (state: any = iState, action: any) =>{
    if(action.type === 'UPDATE_WEATHER'){
        return {
            weather: action.playload
        }
    }

    return state;
}

export default reducer;