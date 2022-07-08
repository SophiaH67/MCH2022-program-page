import Talk from "../lib/interfaces/Talk";
import AttendanceButton from "./AttendanceButton";
import { usePersistentState } from "react-persistent-state";

export interface AttendanceButtonsProps {
  talk: Talk;
}

export enum AttendanceLevel {
  Attending = "Attending",
  MaybeAttending = "MaybeAttending",
  NotAttending = "NotAttending",
}

export default function AttendanceButtons({ talk }: AttendanceButtonsProps) {
  const [currentAttendanceLevel, setCurrentAttendanceLevel] =
    usePersistentState<AttendanceLevel | undefined>(undefined, talk.key);

  return (
    <div className="flex justify-between max-w-md mx-auto">
      {Object.values(AttendanceLevel).map((level) => {
        return (
          <AttendanceButton
            key={level}
            attendanceLevel={level}
            currentAttendanceLevel={currentAttendanceLevel}
            onClick={() => {
              setCurrentAttendanceLevel(level);
            }}
          />
        );
      })}
    </div>
  );
}
