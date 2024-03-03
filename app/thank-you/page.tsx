import React from 'react'
import Button from "@/app/components/button";
import styles from '@/app/css/thankYou.module.css'

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Thank you!</h2>
        <span>We are deeply grateful for your generous donation, and we want to express our sincere appreciation for your support. Your contribution will make a significant impact on the Iceterisk project, allowing us to further fund our plans. Thank you for being a vital part of our community. Thank you!</span>
        <Button 
          href={'/'}
          content={'Go Home'}
          variant={'filled'}
        />
      </div>
    </div>
  )
}

export default page