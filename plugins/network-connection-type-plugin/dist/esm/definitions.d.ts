export interface ConnectionTypePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    getNetworkType(): Promise<{
        type: any;
    }>;
}
