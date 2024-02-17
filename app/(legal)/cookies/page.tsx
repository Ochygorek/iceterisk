import { Metadata } from 'next'
import React from 'react'
import styles from '@/app/css/legal.module.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookies',
}

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.legalContainer}>
        <h2>Cookies</h2>
        <div className={styles.divider}></div>
        <section className={styles.iceteriskSection}>
          <div>
            <h2>Iceterisk</h2>
            <span><b>Last updated: February 15, 2024</b></span>
            <span>This page provides information about the cookies used on our website, including details about their purpose, duration, and your choices regarding their use. By continuing to browse and use this website, you are agreeing to our use of cookies as described in this policy.</span>
            <span>On this page, &quot;Iceterisk&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot; refers to the Iceterisk entity.</span>
          </div>
          <div>
            <h3>What are Cookies?</h3>
            <span>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.</span>
          </div>
          <div>
            <h3>Our Use of Cookies</h3>
            <span>We use cookies for the following purposes:</span>
            <span><b>Essential Cookies: </b>These are cookies that are necessary for the website to function properly. They are usually set in response to user actions, such as logging in or filling out forms. You cannot opt-out of using these cookies.</span>
            <span><b>Analytics Cookies (Next.js Default): </b>Our website uses <Link href='https://nextjs.org/' target='_blank'>Next.js</Link>, which automatically sets cookies to collect anonymous information about how visitors use our site. This helps us analyze and improve the performance of our website.</span>
          </div>
          <div>
            <h3>Changes to this Policy</h3>
            <span>We may update this Cookies Page from time to time to reflect changes in technology, legislation, or our data practices. Please check this page periodically for any updates.</span>
          </div>
        </section>
        <div className={styles.divider}></div>
        <section className={styles.iceteriskSection}>
          <div>
              <h2>Iceterisk app, Iceterisk desktop</h2>
              <span>This page provides information about the cookies used on our website, including details about their purpose, duration, and your choices regarding their use. By continuing to browse and use this website, you are agreeing to our use of cookies as described in this policy.</span>
            </div>
            <div>
            <h3>What are Cookies?</h3>
            <span>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.</span>
          </div>
          <div>
            <h3>Our Use of Cookies</h3>
            <span>We use cookies for the following purposes:</span>
            <span><b>Essential Cookies: </b>These are cookies that are necessary for the website to function properly. They are usually set in response to user actions, such as logging in or filling out forms. You cannot opt-out of using these cookies.</span>
            <span><b>Analytics Cookies (Next.js Default): </b>Our website uses <Link href='https://nextjs.org/' target='_blank'>Next.js</Link>, which automatically sets cookies to collect anonymous information about how visitors use our site. This helps us analyze and improve the performance of our website.</span>
          </div>
          <div>
            <h3>Changes to this Policy</h3>
            <span>We may update this Cookies Page from time to time to reflect changes in technology, legislation, or our data practices. Please check this page periodically for any updates.</span>
          </div>
        </section>
        <div className={styles.divider}></div>
        <span>By continuing to browse and use Iceterisk, Iceterisk app or Iceterisk desktop, you automatically agree to the use of cookies as outlined in our Cookies Policy. Your browser settings may allow you to manage your cookie preferences. It is your responsibility to adjust these settings if you wish to limit or block certain cookies. Please note that blocking essential cookies may impact the functionality of the website.</span>
      </div>
    </main>
  )
}

export default page