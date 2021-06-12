import { WebPlugin } from '@capacitor/core';
import type { HttpPlugin } from './definitions';
export declare class HttpWeb extends WebPlugin implements HttpPlugin {
    get(options: {
        url: string;
    }): Promise<{
        response: any;
    }>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
