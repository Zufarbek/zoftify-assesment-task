import React from 'react'
import styles from './Table.module.css'

export default function Table({data, changeStatus}:any) {
    console.log(data)
  return (
    <div className={styles.main__table}>
        {
            (data.length > 0) ? (
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
                        {
                            data.map((item:any, index:any) => {
                                return (
                                    <tr key={index} className={styles.body__row}>
                                        <td className={styles.body__col}>{item.id}</td>
                                        <td className={styles.body__col}>{item.title}</td>
                                        <td className={styles.body__col}>{item.time}</td>
                                        <td className={styles.body__col}>
                                            <select onChange={(e) => changeStatus({statusId: item.id, statusItem: e.target.value})} value={item.status} >
                                                <option value="published" key="1">Published</option>
                                                <option value="draft" key="2">Draft</option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )
            
            : (
                <div className="m-6">NO DATA..</div>
            )
        }
    </div>
  )
}
