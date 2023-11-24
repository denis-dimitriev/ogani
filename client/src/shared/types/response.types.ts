export interface ServerResponse<T> {
  status: string;
  message: string;
  user: T;
}
