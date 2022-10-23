import React from 'react'
import { LocalStorage } from '../../utils/Posts'
import styles from './Table.module.css'
import { useAppDispatch } from '../../store/hooks'
import { addPost } from '../../store/slices/posts'

export default function Table({data}:any) {
    const dispatch = useAppDispatch()
    
  function changeStatus(statusId:any, statusItem:any) {  
    let LocalPosts = new LocalStorage()
    let newPosts = LocalPosts.changeStatus(statusId, statusItem)
    dispatch(addPost(newPosts))

    window.location.reload(); 
  }
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
                                            <select onChange={(e) => changeStatus(item.id, e.target.value)} value={item.status} >
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
                <div className="m-6">No data..</div>
            )
        }
    </div>
  )
}
