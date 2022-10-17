import React from 'react'
import styles from './Input.module.css'

export default function Input({width, type, placeholder, icon}:any) {
  return (
    <div className={styles.input__with__icon}>
        <input className={styles.zoftify__input} type={type} width={width} placeholder={placeholder} />
        {
            (icon) && <img src={icon} alt={placeholder} className={styles.input__icon} />
        }
    </div>
  )
}