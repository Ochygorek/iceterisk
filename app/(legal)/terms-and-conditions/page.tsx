import { Metadata } from 'next'
import React from 'react'
import styles from '@/app/css/legal.module.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and conditions',
}

function page() {
  return (
    <main className={styles.main}>
      <div className={styles.legalContainer}>
        <h2>Terms and conditions</h2>
        <div className={styles.divider}></div>
        <section className={styles.iceteriskSection}>
          <div>
            <h2>Iceterisk</h2>
            <span><b>Last updated: February 15, 2024</b></span>
            <span>These Terms and Conditions govern the use of the Iceterisk website, including the optional donation process. Users are granted a limited license for website content usage. The document outlines disclaimers regarding website availability, information accuracy, and limitations on liability. Additionally, it covers termination procedures for potential misuse. By accessing the website, users agree to abide by these terms and acknowledge their responsibility for content input into the console or notes sections. Iceterisk reserves the right to terminate access in cases of inappropriate behavior or illegal content sharing through the Iceterisk app.</span>
            <span>On this page, &quot;Iceterisk&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot; refers to the Iceterisk entity.</span>
          </div>
          <div>
            <h3>Donations</h3>
            <span>Donations made through our website are entirely optional and can be either one-time or renewed on a monthly basis. We deeply appreciate the support of our donors, and every contribution goes towards sustaining and improving our services. Please note that these donations are non-refundable.</span>
            <span>The donation process is securely handled by a third-party payment processor, such as <Link href='https://stripe.com/' target='_blank'>Stripe</Link>, ensuring the confidentiality and security of your payment information. No benefits or rewards are associated with donations; it is a voluntary contribution to support our initiatives. By choosing to make a donation, you agree to the terms outlined here and in our <Link href='/privacy-policy'>Privacy Policy</Link>.</span>
          </div>
          <div>
            <h3>Intellectual Property</h3>
            <span>All content on the Iceterisk website, including the name &quot;Iceterisk,&quot; logos, graphics, images, and features outlining pictures for the Iceterisk app and Iceterisk Desktop app, is the intellectual property of Iceterisk. The logo and features outlining pictures have been exclusively created by Iceterisk.</span>
            <span>The theme pictures used on the website are sourced from <Link href='https://www.freepik.com/' target='_blank'>Freepik</Link>. While these theme pictures are part of the overall website design, they remain the intellectual property of their respective creators.</span>
            <span>You are granted a limited, non-exclusive, and non-transferable license to access and use the content for personal, non-commercial purposes. Any unauthorized use, reproduction, or distribution of our intellectual property without prior written consent is strictly prohibited. You agree not to modify, publish, transmit, participate in the transfer or sale of, create derivative works from, or in any way exploit any of the content, in whole or in part.</span>
          </div>
          <div>
            <h3>Liability and Disclaimer</h3>
            <span>While we strive to provide uninterrupted access to the Iceterisk website, we cannot guarantee that it will be available at all times. The website may be subject to temporary interruptions for maintenance, technical issues, or other unforeseen circumstances. We appreciate your understanding and patience in such situations.</span>
            <span>We make every effort to ensure the accuracy and timeliness of the information presented on the Iceterisk website. The <Link href='/news'>News</Link> tab provides up-to-date information, and the <Link href='/docs'>Docs</Link> tab contains factual details. Other sections of the website are maintained to be as factual and up-to-date as possible, with a touch of added enjoyment. Users are encouraged to independently verify any information obtained from the website before making decisions based on it.</span>
            <span>Users are solely responsible for any content input into the console or notes section of the Iceterisk website or app. Iceterisk is not responsible for any information leaks, losses, or consequences arising from user inputs. The information input by users is their sole responsibility, and Iceterisk does not share, access, or store such information. Users acknowledge and agree that any content they input into the console or notes feature is entirely at their own risk.</span>
          </div>
          <div>
            <h3>Termination</h3>
            <span>Iceterisk does not provide user accounts for the website; however, we reserve the right to restrict or terminate access in cases of harassment, inappropriate behavior, or the sharing of illegal content through the Iceterisk app by users. In instances where a user engages in such activities, Iceterisk may, at its sole discretion, implement IP bans to prevent further access. Users acknowledge that engaging in activities contrary to these Terms and Conditions may result in immediate access restrictions or termination, and Iceterisk is not liable for any consequences arising from such actions.</span>
          </div>
          <div>
            <h3>Changes to these Terms and Conditions</h3>
            <span>We may update these Terms and conditions from time to time to reflect changes in technology, legislation, or our data practices. Please check this page periodically for any updates.</span>
          </div>
        </section>
        <div className={styles.divider}></div>
        <section className={styles.iceteriskSection}>
          <div>
            <h2>Iceterisk app, Iceterisk desktop</h2>
            <span>These Terms and Conditions outline the rules and responsibilities for users of Iceterisk, the note-taking app by Iceterisk. Users are expected to adhere to usage guidelines, acknowledge the limitations of local storage, and accept liability for their actions within the app. The document also covers aspects like updates, support availability, and termination procedures. By using Iceterisk, users agree to abide by these terms and conditions.</span>
          </div>
          <div>
            <h3>Usage Guidelines</h3>
            <span>Iceterisk is provided for users to engage in personal note-taking and productivity enhancement. To ensure a positive and respectful user experience, users are expected to adhere to the following guidelines:</span>
            <span><b>Responsible Use: </b> Users should utilize Iceterisk responsibly, refraining from engaging in any activities that violate legal regulations or infringe upon the rights of others.</span>
            <span><b>Prohibited Activities: </b>Activities such as harassment, abuse, or any form of illegal content sharing through the app are strictly prohibited. Users are prohibited from engaging in any actions that may compromise the security, integrity, or availability of the app.</span>
            <span><b>Respect for Privacy: </b>Users should respect the privacy of others and refrain from accessing or attempting to access the notes of other users without explicit permission.</span>
            <span><b>Compliance with Laws: </b>Users must comply with all applicable laws and regulations while using Iceterisk.</span>
            <span>Iceterisk reserves the right to enforce these guidelines and take appropriate action, including restricting or terminating access, in cases of misuse, violation, or activities contrary to the intended use of the app. Users are responsible for their actions within the app and are encouraged to report any inappropriate behavior or content to Iceterisk for review.</span>
          </div>
          <div>
            <h3>Updates and Support</h3>
            <span>Iceterisk enhances the Iceterisk app experience by providing updates periodically. These updates, including new features, improvements, and security enhancements, may be released randomly and are typically communicated through the <Link href='/news'>News</Link> tab on the Iceterisk website or official social media channels. Users are encouraged to stay informed about updates and review specifications in the <Link href='/news'>News</Link> tab.</span>
            <span>While Iceterisk aims to provide consistent support, it does not guarantee ongoing availability or compatibility of the app with all devices or operating systems. Users acknowledge that the app&apos;s functionality and security may be limited if they continue to use outdated versions. For support inquiries, users can refer to the information provided on the Iceterisk website or attempt to reach out via social media. However, please note that Iceterisk is currently unable to provide personalized consultations or technical support for individual user issues.</span>
          </div>
          <div>
            <h3>Liability</h3>
            <span>Users acknowledge and agree that Iceterisk, its affiliates, partners, and contributors are not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use the Iceterisk app. This includes, but is not limited to, damages for lost profits, data, or other intangible losses.</span>
            <span>Iceterisk is not responsible for any consequences resulting from user actions, content input into the app, or the use of the app&apos;s features. Users are solely responsible for the content they input into the app, including notes and any information shared. Iceterisk does not assume liability for any information leaks, losses, or unauthorized access to user data. Users acknowledge that their use of the app is at their own risk.</span>
          </div>
          <div>
            <h3>Termination of Use</h3>
            <span>Iceterisk reserves the right to terminate or restrict a user&apos;s access to the Iceterisk app without prior notice, at its sole discretion. Reasons for termination may include, but are not limited to, violation of these Terms and Conditions, misuse, inappropriate behavior, or any actions that, in the judgment of Iceterisk, are detrimental to the app and its users.</span>
            <span>Upon termination, users agree to cease using the app immediately. Iceterisk is not liable for any consequences resulting from the termination of a user&apos;s access. Users are responsible for the content they input into the app, and Iceterisk is not responsible for any lost, changed, or leaked data following termination. Iceterisk may also implement IP bans to prevent further access in cases of misuse or violation.</span>
          </div>
          <div>
            <h3>Changes to these Terms and Conditions</h3>
            <span>We may update these Terms and conditions from time to time to reflect changes in technology, legislation, or our data practices. Please check this page periodically for any updates.</span>
          </div>
        </section>
        <div className={styles.divider}></div>
        <span>By visiting and/or using Iceterisk, Iceterisk app or Iceterisk desktop, you automatically accept and agree to abide by the terms and conditions outlined above. It is your responsibility to familiarize yourself with these terms and guidelines and to comport yourself accordingly while using our services.</span>
      </div>
    </main>
  )
}

export default page