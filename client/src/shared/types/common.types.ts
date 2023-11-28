export interface ServerResponse<T> {
  status: string;
  message: string;
  user: T;
}

export interface Ogani<T> {
  user?: T;
  language?: T;
}
