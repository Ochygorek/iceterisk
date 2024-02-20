import { Metadata } from 'next'
import React from 'react'
import styles from '@/app/css/legal.module.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy policy',
}

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.legalContainer}>
        <h2>Privacy policy</h2>
        <div className={styles.divider}></div>
        <section className={styles.iceteriskSection}>
          <div>
            <h2>Iceterisk</h2>
            <span><b>Last updated: February 20, 2024</b></span>
            <span>This Privacy Policy outlines how Iceterisk collects, uses, and protects non-personal information from users visiting the website. It clarifies data collection practices, the optional donation process, and the use of third-party services. Users are encouraged to review this policy to understand how their information is handled and to make informed decisions while engaging with the Iceterisk website.</span>
            <span>On this page, &quot;Iceterisk&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot; refers to the Iceterisk entity.</span>
          <span>&quot;Personal Data&quot; refers to any information associated with an identified or identifiable individual.</span>
          </div>
          <div>
            <h3>Information Collection</h3>
            <span>When you visit our website, we automatically collect standard information, including your IP address, browser type, and device information. This non-personal data is collected solely for analytical purposes, allowing us to understand how users interact with our website and improve its overall performance. It&apos;s important to note that we do not gather any personal login information, as our website does not incorporate user account functionality. Your privacy is a priority, and we are committed to transparent data practices.</span>
          </div>
          <div>
            <h3>Payment Information</h3>
            <span>For users who choose to support us through donations, we offer an optional payment process handled by a secure third-party payment processor, such as <Link href='https://stripe.com/' target='_blank'>Stripe</Link>. It&apos;s important to note that we do not store any payment information entered during the donation process on our website. Whether you opt for a one-time donation or a monthly renewal, the entire payment transaction is securely managed by <Link href='https://stripe.com/' target='_blank'>Stripe</Link>. We do not have access to, store, or process any of your sensitive payment details. We encourage you to review <Link href='https://stripe.com/privacy' target='_blank'>Stripe&apos;s privacy policy</Link> and security practices for additional information on how your payment information is safeguarded.</span>
          </div>
          <div>
            <h3>Data Usage</h3>
            <span>The information we collect, such as IP addresses, browser types, and device details, is strictly for analytics purposes. We use this data to analyze user interactions with our website, aiming to improve its performance and enhance the overall user experience. Rest assured, we do not gather any extraordinary information, and our sole intention is to maintain the privacy of our users while continuously refining and optimizing our website.</span>
          </div>
          <div>
            <h3>Third-Party Services</h3>
            <span>Our website utilizes third-party services to enhance functionality and better understand user interactions. Specifically, we use <Link href='https://vercel.com/analytics' target='_blank'>Vercel Analytics</Link> for analytics purposes and <Link href='https://stripe.com/' target='_blank'>Stripe</Link> for processing optional donations. These services may collect non-personal information as outlined in their respective privacy policies. We encourage you to review the privacy policies of these third-party services for detailed information on how they handle data:</span>
            <span><Link href='https://vercel.com/docs/analytics/privacy-policy' target='_blank'>Vercel Analytics Privacy Policy</Link></span>
            <span><Link href='https://stripe.com/privacy' target='_blank'>Stripe Privacy Policy</Link></span>
            <span>Please note that while we strive to work with reputable third-party providers, we are not responsible for their privacy practices.</span>
          </div>
          <div>
            <h3>Changes to this Privacy policy</h3>
            <span>We may update this Privacy policy from time to time to reflect changes in technology, legislation, or our data practices. Please check this page periodically for any updates.</span>
          </div>
        </section>
        <div className={styles.divider}></div>
        <section className={styles.iceteriskSection}>
          <div>
            <h2>Iceterisk app, Iceterisk desktop</h2>
            <span>This Privacy Policy governs the use of Iceterisk, the note-taking app and Iceterisk desktop app developed by Iceterisk. It outlines how user-generated notes are stored locally on the user&apos;s device, prioritizing privacy. The policy clarifies data security measures, limitations of local storage, and user responsibility for note content. Users are encouraged to review this policy to understand how their data is handled and to make informed decisions while using the Iceterisk app.</span>
          </div>
          <div>
            <h3>Data Storage</h3>
            <span>Iceterisk and Iceterisk desktop, the note-taking apps developed by Iceterisk, stores user-generated notes locally on the user&apos;s device. The app does not transmit this data to external servers or store it on any remote databases. The decision to store notes locally is intentional, prioritizing user privacy and ensuring that personal information remains within the user&apos;s control. Iceterisk does not have access to, collect, or process the content of these notes. Users are solely responsible for the content of their notes, and Iceterisk is not liable for any consequences arising from the nature or use of this content.</span>
          </div>
          <div>
            <h3>Data Security</h3>
            <span>While Iceterisk prioritizes user privacy and employs industry-standard security measures, it&apos;s important to acknowledge the inherent limitations of local storage. Local storage, while convenient, may not provide the same level of security as server-based storage solutions. Users should be aware that data stored locally on their device, including user-generated notes, may be vulnerable to risks such as device loss, theft, or unauthorized access.</span>
            <span>Iceterisk does not assume responsibility for any lost, changed, or leaked data stored locally on the user&apos;s device. While we take significant precautions to safeguard user data, including encryption where feasible, users acknowledge and accept the inherent risks associated with local storage. It&apos;s advisable for users to regularly back up their data and take additional security measures to protect their devices and information.</span>
          </div>
          <div>
            <h3>No User Accounts</h3>
            <span>Iceterisk does not require users to create accounts for app access. The app operates on a user-centric model, storing notes locally without the need for personal account information. As a result, Iceterisk does not collect, store, or process any user account details, including usernames, passwords, or personal identifiers. Users enjoy the benefits of note-taking without the necessity of creating accounts, ensuring a streamlined and private experience.</span>
          </div>
          <div>
            <h3>Changes to this Privacy policy</h3>
            <span>We may update this Privacy policy from time to time to reflect changes in technology, legislation, or our data practices. Please check this page periodically for any updates.</span>
          </div>
        </section>
        <div className={styles.divider}></div>
        <span>By accessing and using Iceterisk, Iceterisk app or Iceterisk desktop, you acknowledge that you have read, understood, and agreed to the terms of our Privacy Policy. Your continued use of the website constitutes acceptance of any updates or changes to the policy. It is important to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.</span>
      </div>
    </main>
  )
}

export default page