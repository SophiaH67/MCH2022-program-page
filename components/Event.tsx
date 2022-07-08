import dayjs from "dayjs";
import type Talk from "../lib/interfaces/Talk";
import AttendanceButtons from "./AttendanceButtons";

export interface EventProps {
  talk: Talk;
}

export default function Event({ talk }: EventProps) {
  if (typeof talk.title !== "string") {
    return <></>;
  }

  const start = dayjs(talk.start);
  const end = dayjs(talk.end);

  return (
    <table className="my-4 w-full">
      <tbody className="w-full">
        <tr>
          <td className="bg-black rounded-l-lg px-4 font-mono p-0 m-0">
            <h3 className="text-white text-2xl font-bold">
              {start.format("HH")}
              <br />
              {start.format("A")}
            </h3>
          </td>
          <td className="p-0 m-0">
            <a
              href={`https://program.mch2022.org/mch2021-2020/talk/${talk.code}/`}
            >
              <div className="bg-white py-3 px-2 rounded-tr-lg">
                <h2 className="text-3xl break-words text-gray-800">
                  {talk.title}
                </h2>
                <p className="text-gray-600">
                  {talk.speakers.join(", ")} @Room {talk.room}
                </p>
                <p className="text-gray-700 break-words text-ellipsis max-w-xs xs:max-w-md md:max-w-full">
                  {talk.abstract}
                </p>
                <span className="text-gray-700 italic">
                  {start.format("MMM D, YYYY")}
                  <br />
                  {start.format("h:mma")}-{end.format("h:mma")}
                </span>
              </div>
            </a>
            <div className="bg-white rounded-br-lg border-t-2 border-black">
              <AttendanceButtons talk={talk} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
