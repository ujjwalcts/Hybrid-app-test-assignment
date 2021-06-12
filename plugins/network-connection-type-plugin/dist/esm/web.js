import { WebPlugin } from '@capacitor/core';
export class ConnectionTypeWeb extends WebPlugin {
    async getNetworkType() {
        return { type: {
                type: "WIFI"
            } };
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map