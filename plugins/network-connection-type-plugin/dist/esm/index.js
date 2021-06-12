import { registerPlugin } from '@capacitor/core';
const ConnectionType = registerPlugin('ConnectionType', {
    web: () => import('./web').then(m => new m.ConnectionTypeWeb()),
});
export * from './definitions';
export { ConnectionType };
//# sourceMappingURL=index.js.map