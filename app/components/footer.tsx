import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/css/footer.module.css'
import Button from "../components/button";

function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentContainerDiv}>
        <div className={styles.logoContainer}>
          <Link href='/' id='imageLink'>
            <Image 
              src='/logo/Group 45.svg'
              alt='logo image for footer'
              width={160}
              height={48}
            ></Image>
          </Link>
          <Button
            href={'#'}
            content={'Download'}
            variant={'ghost'}
          ></Button>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footerContentContainer}>
          <div>
            <div className={`${styles.footerInfoContainer} ${styles.socials}`}>
            <h2>Socials</h2>
            <ul className={styles.socialsUl}>
              <li>
                <Link href='https://discord.com/' target='_blank'>
                  <Image
                    src='discord.svg'
                    alt='Discord social media icon.'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href='https://www.youtube.com/' target='_blank'>
                <Image
                    src='youtube.svg'
                    alt='Discord social media icon.'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href='#' target='_blank'>
                <Image
                    src='tiktok.svg'
                    alt='Discord social media icon.'
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className={styles.footerInfoContainer}>
            <h2>Navigation</h2>
            <ul>
              <li>
                <Link href={'/download'}>Download</Link>
              </li>
              <li>
                <Link href={'/news'}>News</Link>
              </li>
              <li>
                <Link href={'/docs'}>Docs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerInfoContainer}>
            <h2>Legal</h2>
            <ul>
              <li>
                <Link href={'/privacy-policy'}>Privacy policy</Link>
              </li>
              <li>
                <Link href={'/terms-and-conditions'}>Terms and conditions</Link>
              </li>
              <li>
                <Link href={'/cookies'}>Cookies</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerInfoContainer}>
            <h2>Support us</h2>
            <ul>
              <li>
                <Link href={'/donate'}>Support Iceterisk</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.copyrightContainer}>
          <div className={styles.copyrightContainerContent}>
            <p>&#169; 2024 Iceterisk</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer