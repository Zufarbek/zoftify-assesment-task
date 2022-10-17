import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Header'
import Main from './Main/Main'
import styles from './Layout.module.css'

export default function Layout({children}: any) {
  return (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.mainWrapper}>
            <Sidebar/>
            <Main>
              {children}
            </Main>
        </div>
    </div>
  )
}
