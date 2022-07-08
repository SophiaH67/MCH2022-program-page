import useSWR from "swr";
import APIResponse from "../lib/interfaces/APIResponse";
import Talk from "../lib/interfaces/Talk";
import Event from "./Event";
import dayjs from "dayjs";

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}`);
  }
  const data = (await res.json()) as APIResponse;
  for (const talk of data.talks) {
    talk.start = dayjs(talk.start);
    talk.end = dayjs(talk.end);
    talk.key = `${talk.code}-${talk.start.format("DD-HH:mm")}`;
  }
  // Sort by start time
  data.talks.sort((a, b) => {
    if (a.start.isBefore(b.start)) {
      return -1;
    }
    if (a.start.isAfter(b.start)) {
      return 1;
    }
    return 0;
  });
  return data;
};

export default function Events() {
  const { data, error } = useSWR<APIResponse>("/api/v2.json", fetcher);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const eventsGroupedByDayAndHour: Talk[][] = [];
  for (const talk of data.talks) {
    const lastHour =
      eventsGroupedByDayAndHour[eventsGroupedByDayAndHour.length - 1];
    if (
      lastHour &&
      lastHour[0].start.isSame(talk.start, "day") &&
      lastHour[0].start.isSame(talk.start, "hour")
    ) {
      lastHour.push(talk);
    } else {
      eventsGroupedByDayAndHour.push([talk]);
    }
  }

  return (
    <div className="bg-transparent rounded-lg py-5 px-3 max-w-6xl mx-auto border-2 border-white">
      {eventsGroupedByDayAndHour.map((hour) => (
        <div key={hour[0].start.format("DD-HH:mm")}>
          <h2 className="text-3xl text-gray-100 mt">
            {hour[0].start.format("MMM D, HH:mm")}
          </h2>
          {hour.map((talk) => (
            <Event key={talk.key} talk={talk} />
          ))}
          <div className="border-t border-gray-300 mb-4"></div>
        </div>
      ))}
    </div>
  );
}
