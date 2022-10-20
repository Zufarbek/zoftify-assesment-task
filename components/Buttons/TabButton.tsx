import React from 'react'
import styles from './TabButton.module.css'

export default function TabButton({type, text, count, onClick}:any) {
  return (
    <>
      {
        (type == "default") && <button onClick={onClick} className={styles.default__btn + " " + styles.__btn} ><span>{text} </span><span className={styles.count__btn}>{count}</span></button>
      }
      {
        (type == "secondary") && <button onClick={onClick} className={styles.secondary__btn + " " + styles.__btn} ><span>{text} </span><span className={styles.count__btn}>{count}</span></button>
      }
    </>
  )
}
