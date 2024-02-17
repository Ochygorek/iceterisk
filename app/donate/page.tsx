import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/app/css/donate.module.css' 

export const metadata: Metadata = {
  title: 'Donate',
}

function page() {
  return (
    <main className={styles.main}>
      <span className={styles.disclaimer}>Disclaimer: This page is unedr developement, there are no transactions avalible at the momen.</span>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h2>Support Iceterisk</h2>
          <span>Your support is greatly appreciated!</span>
        </div>
        <div className={styles.divider}></div>
        <section className={styles.donateSection}>
          <div className={styles.paymentOptionHeading}>
            <h2>One-time</h2>
            <span>This donation is a one-time payment.</span>
          </div>
          <div className={styles.donateSectionContainer}>
            <div>
              <h3>$5 donation</h3>
              <Link href='https://buy.stripe.com/test_14k7sv0OY4kY4E0144'>$5</Link>
            </div>
            <div>
              <h3>$10 donation</h3>
              <Link href='https://buy.stripe.com/test_bIY7sv0OY6t60nK6op'>$10</Link>
            </div>
            <div>
              <h3>$25 donation</h3>
              <Link href='https://buy.stripe.com/test_4gw9AD0OYdVy8UgcMP'>$25</Link>
            </div>
          </div>
        </section>
        <div className={styles.divider}></div>
        <section className={styles.donateSection}>
          <div className={styles.paymentOptionHeading}>
            <h2>Monthly recurring</h2>
            <span>This donation is a monthly reccuring subscription. If you decide to cancel your subscription, check out this <Link href='' className={styles.link}>link</Link>.</span>
          </div>
          <div className={styles.donateSectionContainer}>
            {/* <div>
              <h3>$5 / month</h3>
              <Link href='https://buy.stripe.com/test_14kdQT9lu6t61rOcMQ'>$5 / month</Link>
            </div>
            <div>
              <h3>$10 / month</h3>
              <Link href='https://buy.stripe.com/test_eVa003apyeZC2vS7sx'>$10 / month</Link>
            </div>
            <div>
              <h3>$25 / month</h3>
              <Link href='https://buy.stripe.com/test_28ocMPgNWeZC9Yk7sy'>$25 / month</Link>
            </div> */}
            <span>Coming soon...</span>
          </div>
        </section>
      </div>
    </main>
  )
}

export default page