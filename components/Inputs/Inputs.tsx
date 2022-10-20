import React from 'react'
import styles from './Input.module.css'

export default function Input({width, type, placeholder, icon, id, onInput}:any) {
  return (
    onInput ? (
      <div className={styles.input__with__icon}>

          <input onInput={(e: {target: any}) => onInput(e.target.value)} id={id} className={styles.zoftify__input} type={type} width={width} placeholder={placeholder} />
          {
              (icon) && <img src={icon} alt={placeholder} className={styles.input__icon} />
          }
        
      </div>
    ) :
    (

      <div className={styles.input__with__icon}>

          <input id={id} className={styles.zoftify__input} type={type} width={width} placeholder={placeholder} />
          {
              (icon) && <img src={icon} alt={placeholder} className={styles.input__icon} />
          }
        
      </div>
    )
  )
}
