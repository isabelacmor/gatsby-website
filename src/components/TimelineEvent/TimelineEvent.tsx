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
    case EventType.NEW:
      return "✨";
    default:
      return "👭";
  }
};

export default function TimelineEvent(props: TimelineEventItem) {
  const { title, description, date, icon, type } = props;

  return (
    <div>
      <span>{moment(date).format("MMM YYYY")}</span>
      <h2
        event-icon={icon ?? getIconFromEventType(type)}
        className={styles.eventHeader}
      >
        {title}
      </h2>
      {description}
    </div>
  );
}
