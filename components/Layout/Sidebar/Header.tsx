import React from 'react'
import styles from './Header.module.css'
import { navLinks } from './navLinks'

export default function Header() {
  return (
    <div className={styles.sidebar}>
      <ul>
        {
          navLinks.map((item,index) => {
            return (
              <li key={index} className={styles.list__item}>
                <a href={item.link} className={styles.list__item__link}>
                  <img src={item.icon} alt={item.title["en"]} className={styles.list__item__logo} />
                  {item.title["en"]}
                </a>
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
