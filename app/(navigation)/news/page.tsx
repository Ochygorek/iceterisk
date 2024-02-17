import React from 'react'
import { Metadata } from 'next'
import styles from '@/app/css/news.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'News',
}

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1>News</h1>
          <span>This page serves to provide the latest information about Iceterisk Iceterisk app (Iceterisk desktop included)</span>
        </div>
        <section className={styles.newsSection}>
          <Link href='/news/1.0.0'>
            <div>
              <h3>Release: Early access</h3>
              <span>1.0.0</span>
            </div>
            <Image
              src='/openinanotherwindow.svg'
              alt='Open in another window image'
              width={12}
              height={12}
            />
          </Link>
        </section>
      </div>
    </main>
  )
}

export default page