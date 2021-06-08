import { registerPlugin } from '@capacitor/core';

import type { GeolocationCoordinatesPlugin } from './definitions';

const GeolocationCoordinates = registerPlugin<GeolocationCoordinatesPlugin>(
  'GeolocationCoordinates',
  {
    web: () => import('./web').then(m => new m.GeolocationCoordinatesWeb()),
  },
);

export * from './definitions';
export { GeolocationCoordinates };
