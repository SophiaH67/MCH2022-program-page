import { Dayjs } from "dayjs";
import Name from "./Name";

export default interface Talk {
  code: string;
  title: string | Name;
  abstract: string;
  speakers: string[];
  track: number;
  start: Dayjs;
  end: Dayjs;
  room: number;
  key: string;
}
