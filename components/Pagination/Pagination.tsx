import React, {useState, useEffect} from 'react'
import styles from './Pagination.module.css'

export default function Pagination({itemPerPage, allPerPage, btnStatus, page, setPage, setTableData, draftData, publishedData, posts}:any) {
    const [pagesArr, setPagesArr] = useState([])

    useEffect(() => {
        let newPagesArr:any = new Array(Math.ceil(allPerPage.length / itemPerPage)).fill(0)
        setPagesArr(newPagesArr)
    }, [allPerPage])

    function newPage(currentPage:any){
      console.log("currentPage => ", currentPage)
      console.log("page", page)
      if(btnStatus == "draft") {
        setTableData(draftData.slice((currentPage-1) * itemPerPage, (currentPage) * itemPerPage))
      }
      if(btnStatus == "published") {
        setTableData(publishedData.slice((currentPage-1) * itemPerPage, (currentPage) * itemPerPage))
      }
      if(btnStatus == "all") {
        setTableData(posts.slice((currentPage-1) * itemPerPage, (currentPage) * itemPerPage))
      }
      setPage(currentPage)
    }
  
    
    
  return (
    <div className={styles.pagination}>
        <div className={styles.left}>
            <select name="" id="">
                <option value="">5</option>
                <option value="">6</option>
            </select>
            <span>Showing 1-5 of 20</span>
        </div>
        <div className={styles.right}>
            <button className={styles.btn__prev__next}>{"<"}</button>
            {
                pagesArr.map((item:any, index:any) => {
                    return (
                        <button key={index} className={((index + 1) == page)? styles.btn__pag__active : styles.btn__pagination} onClick={() => newPage(index+1)}>{index + 1}</button>
                    )
                })
            }
            <button className={styles.btn__prev__next}>{">"}</button>
        </div>
    </div>
  )
}
