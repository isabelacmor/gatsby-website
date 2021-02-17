import React, { useState } from "react";
import * as moment from "moment";
import styles from "./styles.module.scss";

export enum EventType {
  WORK,
  COMMUNITY,
  SPEAKING,
  SCHOOL,
  NEW,
}
export interface TimelineEventItem {
  id: string;
  title: string;
  description: JSX.Element;
  date: Date;
  type: EventType;
  icon?: string;
}

const getIconFromEventType = (type: EventType): string => {
  switch (type) {
    case EventType.SPEAKING:
      return "📢";
    case EventType.NEW:
      return "✨";
    case EventType.SCHOOL:
      return "👩‍🎓";
    case EventType.COMMUNITY:
    default:
      return "👭";
  }
};

export default function TimelineEvent(props: TimelineEventItem) {
  const { title, description, date, icon, type } = props;

  return (
    <div className={styles.timelineEventContainer}>
      <h1>{moment(date).format("MMM YYYY")}</h1>
      <h2
        event-icon={icon ?? getIconFromEventType(type)}
        className={styles.eventHeader}
      >
        {title}
      </h2>
      <div className={styles.descriptionContainer}>
        {description}
      </div>
    </div>
  );
}
