import React from 'react'
import styles from './ActionButton.module.css'

export default function ActionButton({text, handleClick, className}:any) {
  
  return (
    <button onClick={handleClick} className={styles.default__btn + " " + className} >{text}</button>
  )
}
