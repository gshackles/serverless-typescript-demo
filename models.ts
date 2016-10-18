export interface IResponsePayload {
  message: string;
  event: any;
}

export interface IQueryParameters {
  foo: string;
}

export interface IEventPayload {
  method: string;
  query: IQueryParameters;
}

export interface ICallback {
  (error: any, result: IResponsePayload): void;
}