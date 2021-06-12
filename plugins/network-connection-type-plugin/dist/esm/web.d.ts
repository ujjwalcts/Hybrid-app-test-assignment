import { WebPlugin } from '@capacitor/core';
import type { ConnectionTypePlugin } from './definitions';
export declare class ConnectionTypeWeb extends WebPlugin implements ConnectionTypePlugin {
    getNetworkType(): Promise<{
        type: any;
    }>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
