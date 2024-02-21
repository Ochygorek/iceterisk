import React from 'react'
import styles from '@/app/css/docs.module.css'
import Link from 'next/link'

function page() {
  return (
    <div className={styles.docsHome}>
      <article className={styles.homeArticle}>
        <h2>Introduction</h2>
        <span>Notes taking app.</span>
        <div className={styles.divider}></div>
        <h2>What is Iceterisk?</h2>
        <span>Iceterisk is a quick and easy way to write down your ideas. A comprehensive note-taking app with a built-in text editor.</span>
        <span>Iceterisk also stores the notes in a remote storage which allows for your notes to be written or edited on the go.</span>
        <span>
          Iceterisk desktop app is powered by <Link href='https://www.electronjs.org/' target='_blank'>Electron</Link>, which is a chromium-based app builder.
        </span>
        <div className={styles.divider}></div>
        <h2>Main Features</h2>
        <h3>Notes</h3>
        <span>Simple interface allows you to take notes. You can make as many notes as you desire.</span>
        <h3>Editing</h3>
        <span>
          The text you write can be edited. The editing includes: <b>bold, underline, italic, URL</b> and <b> code</b>.
        </span>
        <h3>Storing</h3>
        <span>
          Every note is automatically stored in a <Link href='https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage' target='_blank'>Local storage</Link>. This allows you to open your notes on the same device. This does not, however, mean that they are protected. By using Iceterisk, you are automatically agreeing to the <Link href='/terms-and-conditions'>terms and conditions</Link>.
        </span>
        <div className={styles.divider}></div>
        <h2>How to use this Documentation</h2>
        <span>On the left side of the screne is the navigation bar. Here you can find the pages of the Documentation.</span>
        <span>The main content of the Documentation appears in the center. Here you will find everything about the Iceterisk app.</span>
        <div className={styles.last}></div>
      </article>
    </div>
  )
}

export default page