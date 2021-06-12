export interface GeolocationCoordinatesPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getCoordinates(): Promise<{
        coordinates: any;
    }>;
}
