/* eslint-disable @next/next/no-img-element */
import { AttendanceLevel } from "./AttendanceButtons";

export interface AttendanceButtonProps {
  attendanceLevel: AttendanceLevel;
  currentAttendanceLevel: AttendanceLevel | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AttendanceButton({
  attendanceLevel,
  currentAttendanceLevel,
  onClick,
}: AttendanceButtonProps) {
  const active = attendanceLevel === currentAttendanceLevel;

  const maybe = "https://twemoji.maxcdn.com/v/14.0.2/svg/1f914.svg";
  const attending = "https://twemoji.maxcdn.com/v/14.0.2/svg/1f60d.svg";
  const notAttending = "https://twemoji.maxcdn.com/v/14.0.2/svg/1f645.svg";

  return (
    <button
      className={`mx-auto px-2 py-2 ${active ? "bg-gray-500" : "bg-gray-200"}`}
      onClick={onClick}
    >
      <img
        src={
          attendanceLevel === AttendanceLevel.Attending
            ? attending
            : attendanceLevel === AttendanceLevel.MaybeAttending
            ? maybe
            : notAttending
        }
        alt={attendanceLevel}
        className="h-6 w-6"
      />
    </button>
  );
}
