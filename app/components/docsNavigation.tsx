import React from 'react'
import styles from '@/app/css/docs.module.css'
import Link from 'next/link'

function docsNavigation() {
  return (
    <nav className={styles.docsNavigation}>
      <Link className={styles.mainLink} href={'/docs'}>Home</Link>
      <Link href={'/docs/shortcuts'}>Shortcuts</Link>
      <Link href={'/docs/settings'}>Settings</Link>
    </nav>
  )
}

export default docsNavigation