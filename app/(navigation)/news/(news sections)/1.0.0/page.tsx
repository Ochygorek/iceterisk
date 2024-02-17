import React from 'react'
import styles from '@/app/css/newssection.module.css'

function page() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.newsSectionContainer}>
        <div className={styles.headingContainer}>
          <h2>Release: Early access</h2>
          <span>1.0.0</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <div>
            <h2>Iceterisk</h2>
            <span>Website for Iceterisk app and Iceterisk desktop.</span>
          </div>
          <div>
            <h3>Home</h3>
            <span>Get a quick overlook about our app and its features.</span>
          </div>
          <div>
            <h3>Download</h3>
            <span>Here you can find system requirements for Iceterisk desktop.</span>
          </div>
          <div>
            <h3>News</h3>
            <span>The latest updates and everything about them.</span>
          </div>
          <div>
            <h3>Docs</h3>
            <span>Documentation for how Iceterisk app and Iceterisk desktop operate and their features.</span>
          </div>
          <div>
            <h3>Support Iceterisk</h3>
            <span>Page for an optional support for the Iceterisk project. Every donation is greately appreciated.</span>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <div>
            <h2>Iceterisk app, Iceterisk desktop</h2>
            <span>Note taking application.</span>
          </div>
          <div>
            <h3>Note taking</h3>
            <span>Take notes quickly and flawlessly</span>
          </div>
          <div>
            <h3>Editing notes</h3>
            <span>Editing provides you with the power to make the text bold, underlined, italic, strikethrough, code decoration and URL link. </span>
          </div>
          <div>
            <h3>Saving notes</h3>
            <span>notes are being saved on your device locally.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page