import React, { useEffect, useState } from "react";
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
    { title: '👩‍🎓 Education', type: EventType.SCHOOL, checked: true }, 
    { title: '📢 Speaking', type: EventType.SPEAKING, checked: true },
    { title: '✨ Key events', type: EventType.NEW, checked: true },
    { title: '👭 Community', type: EventType.COMMUNITY, checked: true }
  ];

  const handleFilterUpdate = (filterOptions: FilterOption[]) => {
    setFilteredEvents(events.filter((event: TimelineEventItem) => {
      console.log("event", event);
      console.log("filter option", filterOptions.find((option: FilterOption) => option.type === event.type));
      
      console.log("should include event?", filterOptions.find((option: FilterOption) => option.type === event.type)?.checked);
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
