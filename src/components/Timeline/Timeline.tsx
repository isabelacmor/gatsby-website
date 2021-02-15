import React from "react";
import TimelineEvent, {
  TimelineEventItem,
} from "../TimelineEvent/TimelineEvent";

export interface TimelineProps {
  events: TimelineEventItem[];
}

export default function Timeline(props: TimelineProps) {
  const { events } = props;
  return (
    <div>
      {events.map((event: TimelineEventItem) => {
        return <TimelineEvent {...event} key={event.id} />;
      })}
    </div>
  );
}
