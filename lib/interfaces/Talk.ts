import Name from "./Name";

export default interface Talk {
  code: string;
  title: string | Name;
  abstract: string;
  speakers: string[];
  track: number;
  start: Date;
  end: Date;
  room: number;
}