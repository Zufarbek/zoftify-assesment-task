import React from 'react'
import styles from './DatePicker.module.css'

export default function DataPicker({id}:any) {
  return (
    <>
        <input id={id} className={styles.zoftify__date} type="date"/>
    </>
  )
}
