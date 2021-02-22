import React from "react";
import styles from "./styles.module.scss";
import me from '../../../static/me.jpeg';

export default function Bio() {
  return (
    <header className={styles.headerContainer}>
        <img src={me} alt="Isabela's headshot" />
        <div className={styles.bioContainer}>
            <h1>Isabela Moreira</h1>
            <p>Senior frontend engineer and mechanical keyboard lover in Seattle creating experiences with code and design</p>
            <p>Current ⌨ <a href="https://www.cftkb.com/shop/mysterium-tkl-diy-keyboard-kit">Mysterium with KAT Milkshake</a></p>
            <div className={styles.followContainer}>
                <a href="https://twitter.com/isabelacmor" rel="me" target="_blank" aria-label="Open Isabela's Twitter">
                    <h1>Twitter</h1>
                </a>
                <a href="https://github.com/isabelacmor" target="_blank" aria-label="Open Isabela's GitHub">
                    <h1>GitHub</h1>
                </a>
                <a href="http://linkedin.com/in/isabela-moreira" target="_blank" aria-label="Open Isabela's LinkedIn">
                    <h1>LinkedIn</h1>
                </a>
                <a href="https://github.com/isabelacmor/talks" target="_blank" aria-label="Open Isabela's talks">
                    <h1>Talks</h1>
                </a>
                <a href="https://github.com/isabelacmor/resume/blob/master/MoreiraResumeJuly2019.pdf" target="_blank" aria-label="Open Isabela's resume">
                    <h1>Resume</h1>
                </a>
            </div>
        </div>
    </header>
  );
}
