import React from 'react'
import styles from './Select.module.css'

export default function Select() {
  return (
    <select className={styles.zoftify__select} name="" id="">
        <option disabled selected>Status</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
    </select>
  )
}
