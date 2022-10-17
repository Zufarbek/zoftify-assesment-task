import React from 'react'
import { useRouter } from 'next/router'
import styles from './Main.module.css'

const Main = ({children}:any) => {
  const router = useRouter()
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}


export default Main