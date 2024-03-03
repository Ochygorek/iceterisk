import React from 'react'
import { Metadata } from 'next'
import styles from '@/app/css/download.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Download',
}

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.downloadSectionHero}>
          <div className={styles.downloadSectionHeroContainer}>
            <div className={styles.productInfo}>
              <h1>Iceterisk desktop</h1>
              <span>Have your notes avalible on your desktop at any given time. Download Iceterisk desktop for quick and easy acces.</span>
            </div>
            {/* <Link href='#' download={''} className={styles.downloadButton}>Download</Link> */}
            <span className={styles.currentlyDisabled}> Currently unavalible</span>
          </div>
        </section>
        <section className={styles.downloadSectionSystemRequirements}>
          <div className={styles.systemRequirementsContainer}>
            <h2 className={styles.systemRequirementsHeader}>System requirements</h2>
          </div>
          <div className={styles.component}>
            <div>
              <h3>Windows</h3>
              <span>
                <b>Version: </b> Windows 10 / Server 2012 R2 or higher
              </span>
            </div>
            <Image
              src='/windows.svg'
              alt='Windows download specifications image'
              width={32}
              height={32}
            />
          </div>
          <div className={styles.component}>
            <div>
              <h3>Mac OS</h3>
              <span>
                <b>Version: </b> macOS 11.6.0 or higher
              </span>
            </div>
            <Image
              src='/apple.svg'
              alt='Windows download specifications image'
              width={32}
              height={32}
            />
          </div>
          <div className={styles.component}>
            <div>
              <h3>Linux</h3>
              <span>
                <b>RAM: </b> 8GB  or more
              </span>
              <span>
                <b>Disk space: </b> At least 25GB of free disk space
              </span>
            </div>
            <Image
              src='/linux.svg'
              alt='Windows download specifications image'
              width={32}
              height={32}
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default page