import React from 'react'
import styles from './Header.module.css'
import { navLinks } from './navLinks'
import Link from 'next/link'


export default function Header() {
  return (
    <div className={styles.sidebar}>
      <ul>
        {
          navLinks.map((item,index) => {
            return (
              <li key={index} className={styles.list__item}>
                <Link href={item.link} >
                  <a className={styles.list__item__link}>
                    <img src={item.icon} alt={item.title["en"]} className={styles.list__item__logo} />
                    {item.title["en"]}
                  </a>
                </Link>
              </li>
            )
          })
        }
        <li>
          <a href=""></a>
        </li>
      </ul>
    </div>
  )
}
