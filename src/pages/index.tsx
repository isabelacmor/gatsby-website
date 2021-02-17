import React from "react";
import Timeline from "../components/Timeline/Timeline";
import { EVENTS } from "../utils/events";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Timeline
        events={EVENTS}
      />
    </div>
  );
}
