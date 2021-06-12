import { WebPlugin } from '@capacitor/core';
export class GeolocationCoordinatesWeb extends WebPlugin {
    async getCoordinates() {
        return { coordinates: {
                lat: 40.7128,
                long: -74.0060
            } };
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map