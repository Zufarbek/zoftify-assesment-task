import React, {useState, useEffect} from 'react'
import styles from './Pagination.module.css'

export default function Pagination({itemPerPage, setItemPerPage, allPerPage, btnStatus, page, setPage, setTableData, draftData, publishedData, posts}:any) {
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
            <select onChange={(e:any) => setItemPerPage(e.target.value)} value={itemPerPage} className={styles.showing__per__page}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={posts.length}>all</option>
            </select>
            <span className={styles.showing}>Showing 1 - {itemPerPage} of {posts.length}</span>
        </div>
        <div className={styles.right}>
            <button className={styles.btn__prev__next} onClick={() => newPage(page-1)} disabled={(page == 1) && true}>{"<"}</button>
            {
                pagesArr.map((item:any, index:any) => {
                    return (
                        <button key={index} className={((index + 1) == page)? styles.btn__pag__active : styles.btn__pagination} onClick={() => newPage(index+1)}>{index + 1}</button>
                    )
                })
            }
            <button className={styles.btn__prev__next} onClick={() => newPage(page+1)} disabled={(page == pagesArr.length) && true} >{">"}</button>
        </div>
    </div>
  )
}
