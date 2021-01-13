export type tipType = 'primary' | 'success' | 'warn' | 'error' | 'info';
export interface IOpentip {
  type?: tipType;
  text?: string;
}