import React from 'react'
import styles from './TabButton.module.css'

export default function TabButton({type, text, count}) {
  return (
    <>
      {
        (type == "default") && <button className={styles.default__btn + " " + styles.__btn} ><span>{text} </span><span className={styles.count__btn}>{count}</span></button>
      }
      {
        (type == "secondary") && <button className={styles.secondary__btn + " " + styles.__btn} ><span>{text} </span><span className={styles.count__btn}>{count}</span></button>
      }
    </>
  )
}
