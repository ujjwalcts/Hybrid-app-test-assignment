import { WebPlugin } from '@capacitor/core';
export class HttpWeb extends WebPlugin {
    async get(options) {
        return {
            response: options
        };
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map