'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const ConnectionType = core.registerPlugin('ConnectionType', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ConnectionTypeWeb()),
});

class ConnectionTypeWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ConnectionTypeWeb: ConnectionTypeWeb
});

exports.ConnectionType = ConnectionType;
//# sourceMappingURL=plugin.cjs.js.map
