import React from 'react'
import styles from './Select.module.css'

export default function Select({id}:any) {
  return (
    <select  className={styles.zoftify__select} defaultValue="default" name="" id={id} >
        <option disabled value="default">Status</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
    </select>
  )
}
