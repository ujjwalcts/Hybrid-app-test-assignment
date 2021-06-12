import { WebPlugin } from '@capacitor/core';
import type { GeolocationCoordinatesPlugin } from './definitions';
export declare class GeolocationCoordinatesWeb extends WebPlugin implements GeolocationCoordinatesPlugin {
    getCoordinates(): Promise<{
        coordinates: any;
    }>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
