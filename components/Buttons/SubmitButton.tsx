import React from 'react'
import styles from './SubmitButton.module.css'

export default function ActionButton({handleClick, className, value}:any) {
  
  return (
    <input onClick={handleClick} className={styles.default__btn + " " + className} value={value}/>
  )
}
