import { registerPlugin } from '@capacitor/core';
const GeolocationCoordinates = registerPlugin('GeolocationCoordinates', {
    web: () => import('./web').then(m => new m.GeolocationCoordinatesWeb()),
});
export * from './definitions';
export { GeolocationCoordinates };
//# sourceMappingURL=index.js.map