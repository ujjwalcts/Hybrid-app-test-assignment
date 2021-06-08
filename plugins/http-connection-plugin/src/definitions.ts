export interface HttpPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  get(options: { url: string }): Promise<{ response: any }>;
  
}
