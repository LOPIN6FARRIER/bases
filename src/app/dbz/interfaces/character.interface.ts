
export type uid = `${string}-${string}-${string}-${string}-${string}`;
export interface Character{
  name: string;
  power: number;
  id: uid;
}
