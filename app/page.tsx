import Image from "next/image";
import Button from "./components/button";
import styles from '@/app/css/main.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.mian}>
        <section className={styles.sectionOne} id="home">
          <Image
            src='/theme.svg'
            alt="Cover Image please work"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          ></Image>
          <div className={styles.sectionOneInfoContainer}>
            <div className={styles.sectionOneTextContainer}>
              <div className={styles.earlyAccess}>Early acces</div>
              <h1>Iceterisk</h1>
              <span>A quick and easy way to write down your ideas. A comprehensive note-taking app with a built-in text editor. Store all your notes on your device.</span>
            </div>
            <div className={styles.sectionOneButtonsContainer}>
              <Button 
                href={'/download'}
                content={'Download'}
                variant={'filled'}
                size={'large'}
              />
              <Button 
                href='https://www.app.iceterisk.com'
                content={'Web version'}
                variant={'outlined'}
                size={'large'}
              />
            </div>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.sectionTwoFeaturesNotes} id="take-notes">
            <Image
              src='/Frame 14.svg'
              alt="Image for taking notes"
              width={640}
              height={400}
              objectFit="cover"
              objectPosition="center"
            ></Image>
            <div className={styles.sectionTwoFeaturesTextContainer}>
              <h2>Take notes</h2>
              <span>Never lose another thought again, or you know... at least try not to. Capture and organize everything into a simple notes system. It&apos;s as easy as pressing a button... like, literally... just one button.</span>
            </div>
          </div>
          <div className={styles.sectionTwoFeaturesEdit} id="edit-notes">
            <div className={styles.sectionTwoFeaturesTextContainer}>
              <h2>Edit notes</h2>
              <span>There is no such thing as not knowing where something is in your notes with our easy-to-use text editor. There is no easier way than just a simple toolbar... that&apos;s it.</span>
            </div>
            <Image
              src='/Frame 15.svg'
              alt="Image for editing text"
              width={640}
              height={400}
              objectFit="cover"
              objectPosition="center"
            ></Image>
          </div>
          <div className={styles.sectionTwoFeaturesSave} id="save-notes">
            <Image
              src='/Frame 16.svg'
              alt="Image for saving notes"
              width={640}
              height={400}
              objectFit="cover"
              objectPosition="center"
            ></Image>
            <div className={styles.sectionTwoFeaturesTextContainer}>
              <h2>Save notes</h2>
              <span>Store your notes in Locally. Just save a note... come back to it whenever you desire. Your notes are there just for you.</span>
            </div>
          </div>
        </section>
        <section className={styles.sectionNoRegistration} id="no-registration">
          <span className={styles.predicament}>Also...</span>
          <div className={styles.noRegistrationContentContainer}>
            <h2>No registration</h2>
            <span>You can use Iceterisk without the need to register any account. How cool is that!</span>
          </div>
        </section>
        <section className={styles.suppoerSection}>
          <div className={styles.suppoerSectionContainer}>
            <div className={styles.suppoerSectionTextContainer}>
              <h2>Support Iceterisk</h2>
              <span>Support us with a financial donation. We appreciate every type of support. Thank you for using Iceterisk.</span>
            </div>
            <div className={styles.donateImage}>
              <div className={styles.donabeButton}>
                <Button 
                  href='/donate'
                  content={'Support iceterisk'}
                  variant={'higlight'}
                  size={'large'}
                />
              </div>
                <Image
                  className={styles.donateImage}
                  src='/Frame 22.svg'
                  alt='Image for donation'
                  width={640}
                  height={400}
                  objectFit="cover"
                  objectPosition="center"
                ></Image>
            </div>
          </div>
          <div className={styles.finalDownloadButton}>
            <h3>So, let&apos;s start by clicking the button blow...</h3>
            <Button 
              href={'/download'}
              content={'Download'}
              variant={'filled'}
              size={'large'}
            />
          </div>
        </section>
      </main>
    </>
  );
}
