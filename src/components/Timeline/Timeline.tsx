import React, { useState } from "react";
import Filter, { FilterOption } from "../Filter/Filter";
import TimelineEvent, {
  EventType,
  TimelineEventItem,
} from "../TimelineEvent/TimelineEvent";
import styles from "./styles.module.scss";

export interface TimelineProps {
  events: TimelineEventItem[];
}

export default function Timeline(props: TimelineProps) {
  const { events } = props;
  const [ filteredEvents, setFilteredEvents ] = useState(events);
  const allFilterOptions = [
    { title: '✨ Key events', type: EventType.NEW, checked: true },
    { title: '📢 Speaking', type: EventType.SPEAKING, checked: true },
    { title: '👭 Community', type: EventType.COMMUNITY, checked: true },
    { title: '👩‍🎓 Education', type: EventType.SCHOOL, checked: true }, 
  ];

  const handleFilterUpdate = (filterOptions: FilterOption[]) => {
    setFilteredEvents(events.filter((event: TimelineEventItem) => {
      return filterOptions.find((option: FilterOption) => option.type === event.type)?.checked;
    }));
  }

  return (
    <div className={styles.TimelineContainer}>
      <Filter options={allFilterOptions} onChange={handleFilterUpdate} />
      <div className={styles.TimelineEventsContainer}>
        {filteredEvents.map((event: TimelineEventItem) => {
          return <TimelineEvent {...event} key={event.id} />;
        })}
      </div>
    </div>
  );
}
