import React from "react";
import Bio from "../components/Bio/Bio";
import Timeline from "../components/Timeline/Timeline";
import { EVENTS } from "../utils/events";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Bio />
      <Timeline
        events={EVENTS}
      />
    </div>
  );
}
