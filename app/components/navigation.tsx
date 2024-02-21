'use client'

import Image from 'next/image'
import Button from './button'
import styles from '@/app/css/navigation.module.css'
import Link from 'next/link'
import { useState } from 'react'

function navigation() {
  const [active, setActive] = useState<boolean>(false)

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

      <div className={styles.phoneContainer}>
        <Link href='/' onClick={() => (setActive(false))}>
          <Image 
            src='/logo/Group 37.svg'
            alt='logo for the navigation bar'
            height={48}
            width={200}
          ></Image>
        </Link>
        <button onClick={() => setActive(!active)}>{active ? <Image src='/closemenu.svg' alt='Close phone nav menu image' width={16} height={16}/> : <Image src='/menu.svg' alt='Close phone nav menu image' width={16} height={16}/>}</button>
        {active &&         
          <div className={styles.linksHolder}>
            <Link onClick={() => (setActive(!active))} href={'/download'}>Download</Link>
            <Link onClick={() => (setActive(!active))} href={'/news'}>News</Link>
            <Link onClick={() => (setActive(!active))} href={'/docs'}>Docs</Link>

            <Link onClick={() => (setActive(!active))} href='https://app.iceterisk.com' className={styles.vebButton}>Web version</Link>
            <Link onClick={() => (setActive(!active))} href='/donate' className={styles.donateButton}>Support iceterisk</Link>
          </div>
        }
      </div>
    </nav>
  )
}

export default navigation