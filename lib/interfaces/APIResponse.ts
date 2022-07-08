import Room from "./Room";
import Speaker from "./Speaker";
import Talk from "./Talk";
import Track from "./Track";

export default interface APIResponse {
  talks: Talk[];
  version: string;
  timezone: string;
  tracks: Track[];
  rooms: Room[];
  speakers: Speaker[];
}
