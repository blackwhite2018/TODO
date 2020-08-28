export default interface TaskTypes {
  id_?: string | null;
  status?: string;
  description: string;
  created: string;
  timerID?: any;
  timer: boolean;
  time: number;
}
