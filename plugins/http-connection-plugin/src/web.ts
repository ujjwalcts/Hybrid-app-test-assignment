import { WebPlugin } from '@capacitor/core';

import type { HttpPlugin } from './definitions';

export class HttpWeb extends WebPlugin implements HttpPlugin {
  async get(options: { url: string; }): Promise<{ response: any; }> {
    return {
      response: options
    };
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
