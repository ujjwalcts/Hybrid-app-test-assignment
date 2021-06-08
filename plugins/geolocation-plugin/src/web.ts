import { WebPlugin } from '@capacitor/core';

import type { GeolocationCoordinatesPlugin } from './definitions';

export class GeolocationCoordinatesWeb
  extends WebPlugin
  implements GeolocationCoordinatesPlugin {
    async getCoordinates(): Promise<{ coordinates: any; }> {
    return{ coordinates : {
      lat : 40.7128,
      long : -74.0060
    }}
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
