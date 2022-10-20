import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Header() {
  const router = useRouter()
  console.log("router", router)
  return (
    <div className={styles.header}>
        <div className={styles.logo__section}>
          <img className={styles.logo} src="zoftify.png" alt="zoftify logo" />
        </div>
      <div className="flex items-center">
      {
        (router.pathname != "/") && (
          <div onClick={() => router.replace("/")} className={styles.backButton}>
            <img className={styles.backIcon} src="assets/icons/back.png" alt="" />
          </div>
        )
      }
        <h3 className={styles.title}>{(router.pathname == "/")? "Posts" : "New Posts" }</h3>
      </div>
    </div>
  )
}