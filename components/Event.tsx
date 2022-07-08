import type Talk from "../lib/interfaces/Talk";

export interface EventProps {
  talk: Talk;
}

export default function Event({ talk }: EventProps) {
  if (typeof talk.title !== "string") {
    return <></>;
  }

  return (
    <div className="event">
      <h2>{talk.title}</h2>
      <p>{talk.abstract}</p>
    </div>
  );
}
