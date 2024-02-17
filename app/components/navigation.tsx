'use client'

import Image from 'next/image'
import Button from './button'
import styles from '@/app/css/navigation.module.css'
import Link from 'next/link'
import { useState } from 'react'

function navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationLeftContainer}>
        <Link href={'/'}>
          <Image 
            src='/logo/Group 37.svg'
            alt='logo for the navigation bar'
            height={48}
            width={200}
          ></Image>
        </Link>
        <div className={styles.leftContainerLinks}>
          <Link href={'/download'}>Download</Link>
          <Link href={'/news'}>News</Link>
          <Link href={'/docs'}>Docs</Link>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button 
          href='https://www.app.iceterisk.com'
          content={'Web version'}
          variant={'outlined'}
        />
        <Button 
          href='/donate'
          content={'Support iceterisk'}
          variant={'higlight'}
        />
      </div>
    </nav>
  )
}

export default navigation