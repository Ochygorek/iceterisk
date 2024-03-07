import React from 'react'
import styles from '@/app/css/docs.module.css'

function page() {
  return (
<article className={styles.article}>
        <h2>Settings</h2>
        <span>In-app settings allow you to change, update or reset your notes, theme and overall experience.</span>
        <span>
          <b>Disclaimer: </b> changes in settings are non-reversable at the moment.
        </span>
        <div className={styles.divider}></div>
        <h2>Notes section</h2>
        <h3>Delete Notes</h3>
        <span>This setting allows you to delete all your notes in bulk. This also includes the content inside the note. The change is permanent non-reversable.</span>        
        <h3>Reset numbers</h3>
        <span>Reset numbers allows you to reset the number in your note name. This feature could be usefull if you are starting new project and want to have all of the numbers start from the beginning for organisation and convenience.</span>
        <div className={styles.divider}></div>
        <span>More coming soon...</span>
        <div className={styles.last}></div>
    </article>
  )
}

export default page