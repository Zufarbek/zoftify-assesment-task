import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header() {
  const router = useRouter()
  return (
    <div className={styles.header}>
      <div className={styles.logo__section}>
        <img className={styles.logo} src="zoftify.png" alt="zoftify logo" />
      </div>
        <div className="flex items-center">
          <div onClick={() => router.replace("/")} className={styles.backButton}>
            <img className={styles.backIcon} src="assets/icons/back.png" alt="" />
          </div>
          <h3 className={styles.title}>{(false)? "Posts" : "New Posts" }</h3>
        </div>
    </div>
  )
}
//(false)? "hidden" : ("d-block " + styles.backButton)