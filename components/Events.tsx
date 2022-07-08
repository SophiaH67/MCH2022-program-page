import useSWR from "swr";
import APIResponse from "../lib/interfaces/APIResponse";
import Event from "./Event";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Events() {
  const { data, error } = useSWR<APIResponse>("/api/v2.json", fetcher);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.talks.map((talk) => (
        <Event key={talk.code + talk.end} talk={talk} />
      ))}
    </div>
  );
}
