import { WebPlugin } from '@capacitor/core';

import type { ConnectionTypePlugin } from './definitions';

export class ConnectionTypeWeb
  extends WebPlugin
  implements ConnectionTypePlugin {
    async getNetworkType(): Promise<{ type: any; }> {
    return{ type : {
      type : "WIFI"
    }}
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
