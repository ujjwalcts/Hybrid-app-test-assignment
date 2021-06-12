var capacitorGeolocationCoordinates = (function (exports, core) {
    'use strict';

    const GeolocationCoordinates = core.registerPlugin('GeolocationCoordinates', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.GeolocationCoordinatesWeb()),
    });

    class GeolocationCoordinatesWeb extends core.WebPlugin {
        async getCoordinates() {
            return { coordinates: {
                    lat: 40.7128,
                    long: -74.0060
                } };
        }
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GeolocationCoordinatesWeb: GeolocationCoordinatesWeb
    });

    exports.GeolocationCoordinates = GeolocationCoordinates;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
