import React from 'react'
import styles from './Table.module.css'

export default function Table() {
  return (
    <div className={styles.main__table}>
        <table className={styles.table}>
        <thead className={styles.head}>
            <tr className={styles.head__row}>
                <th className={styles.head__col}>ID</th>
                <th className={styles.head__col}>Title</th>
                <th className={styles.head__col}>Time</th>
                <th className={styles.head__col}>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr className={styles.body__row}>
                <td className={styles.body__col}>18</td>
                <td className={styles.body__col}>Next.js is tde future of React8</td>
                <td className={styles.body__col}>2h ago</td>
                <td className={styles.body__col}>Draft</td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}
