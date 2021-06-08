import { registerPlugin } from '@capacitor/core';

import type { ConnectionTypePlugin } from './definitions';

const ConnectionType = registerPlugin<ConnectionTypePlugin>('ConnectionType', {
  web: () => import('./web').then(m => new m.ConnectionTypeWeb()),
});

export * from './definitions';
export { ConnectionType };
