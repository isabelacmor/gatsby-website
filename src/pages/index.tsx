import React from "react";
import Timeline from "../components/Timeline/Timeline";
import { EventType } from "../components/TimelineEvent/TimelineEvent";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Timeline
      events={[
        {
          id: "123",
          title: "test",
          description: <p>test <a>link</a></p>,
          date: new Date(),
          type: EventType.COMMUNITY,
        },
      ]}
    />
  );
}
