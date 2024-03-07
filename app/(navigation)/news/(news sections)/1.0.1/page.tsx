import React from 'react'
import styles from '@/app/css/newssection.module.css'

function page() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.newsSectionContainer}>
        <div className={styles.headingContainer}>
          <h2>Settings page</h2>
          <span>1.0.1</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <div>
            <h2>Iceterisk app, Iceterisk desktop</h2>
            <span>In-app settings.</span>
          </div>
          <div>
            <h3>Delete Notes</h3>
            <span>This feature allows you to delete all your notes with one click.</span>
          </div>
          <div>
            <h3>Reset Numbers</h3>
            <span>This feature allows you to reset the numbers in your notes sidebar.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page