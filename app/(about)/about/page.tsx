import React from 'react'
import styles from '@/app/css/about.module.css'
import Link from 'next/link'

function page() {
  return (
    <main className={styles.root}>
      <div className={styles.main}>
        <section>
          <h2>About</h2>
          <article>Iceterisk, created by a student at <Link href='https://gymroznov.cz/' target='_blank'>Gymnazim Roznov pod Radhostem</Link> as part of a seminar project, stands as a practical yet convenient note-taking app. This project took shape within the academic context, evolving into separate brand.</article>
          <article>Rooted in a commitment to simplicity and functionality, Iceterisk aims to redefine the note-taking experience. With a focus on innovation and user-centric design, our journey began in the academic realm to provide individuals and teams with a powerful yet straightforward tool for capturing ideas and fostering collaboration. Join us as we continue to evolve and shape the future of note-taking.</article>
        </section>
        <div className={styles.divider}></div>
        <section>
          <h3>Vision</h3>
          <article>Our goal is to simplify organization, planning, and management for our users. We achieve this by providing a seamless experience through our user-friendly interface and an easy-to-use built-in text editor with a variety of options which could be seen in our <Link href='/docs'>documentation</Link>.</article>
          <article>As we envision the future, Iceterisk seeks to become more than just a note-taking app; it aspires to be a dynamic hub for creativity and collaboration. We are dedicated to continually enhancing our features, incorporating user feedback, and adapting to evolving needs. Our commitment to user empowerment and simplicity remains unwavering, and we invite you to explore the possibilities with Iceterisk.</article>
        </section>
        <div className={styles.divider}></div>
        <section>
          <h3>Future of Iceterisk</h3>
          <article>Our objective is to provide as many features as possible to fulfill our vision. In the following section, we present our upcoming features:</article>
          <article>
            <ul>
              <li>
                <b>More Text Editor Options: </b>Explore a variety of text editor options, including font customization, text size adjustments, paragraph alignment (sides or center), list creation, and image imports, providing a flexible and personalized note-taking experience.
              </li>
              <li>
                <b>Time and Date Notifications: </b>Never miss an event or meeting with time and date notifications. This feature ensures you stay organized without the hassle of remembering every important date.
              </li>
              <li>
                <b>Canvas: </b>Unleash your creativity with the Canvas feature, allowing you to freely lay out your ideas using the pencil tool, providing a dynamic and visual note-taking experience.
              </li>
              <li>
                <b>Accounts: </b>Create a personal environment tailored to your needs. Accounts open the door to additional features and opportunities, enhancing your overall Iceterisk experience.
              </li>
              <li>
                <b>Collaboration: </b>Foster teamwork and synergy by collaborating with your team in the same environment. Share ideas, notes, and work together seamlessly.
              </li>
              <li>
                <b>Cloud Storage: </b>Access your notes from anywhere with cloud storage. As long as you have an account and internet access, your notes are readily available, offering convenience and flexibility.
              </li>
              <li>
                <b>Optional Subscription Plan: </b>Elevate your Iceterisk experience with our optional subscription plan. Enjoy additional features, increased cloud storage, and more, tailored for users who seek the full spectrum of what Iceterisk has to offer.
              </li>
              <li>
                And more...
              </li>
            </ul>
          </article>
          <article>Please note that our future plans are scoped across several years and may change according to time and resources. We appreciate your patience.</article>
        </section>
      </div>
    </main>
  )
}

export default page