var capacitorConnectionType = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
