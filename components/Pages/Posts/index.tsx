import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'

import styles from './Posts.module.css'
import Input from '../../Inputs/Inputs'
import ActionButton from '../../Buttons/ActionButton'
import TabButton from '../../Buttons/TabButton'
import Table from '../../Table/Table'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addPost } from '../../../store/slices/posts';
import { LocalStorage } from '../../../utils/Posts';
import Pagination from '../../Pagination/Pagination';

export default function App (props: any) {
  const router = useRouter()
  const posts = useAppSelector(state => state.posts.value)
  const dispatch = useAppDispatch()

  //Tabs
  const [tableData, setTableData] = useState([])
  const [draftData, setDraftData] = useState([])
  const [publishedData, setPublishedData] = useState([])
  const [btnStatus, setBtnStatus] = useState("all")

  //Pagination
  const [allPerPage, setAllPerPage] = useState([])
  const [itemPerPage, setItemPerPage] = useState(5)
  const [page, setPage] = useState(1)

  useEffect(() => {
    let LocalPosts = new LocalStorage()
    dispatch(addPost(LocalPosts.posts))
    if(btnStatus == 'all') {setTableData(LocalPosts.posts.slice((page-1) * itemPerPage, (page) * itemPerPage))}
    if(btnStatus == 'published') {setTableData(publishedData.slice((page-1) * itemPerPage, (page) * itemPerPage))}
    if(btnStatus == 'draft') {setTableData(draftData.slice((page-1) * itemPerPage, (page) * itemPerPage))}
    
    setDraftData(LocalPosts.filterByStatus("draft"))
    setPublishedData(LocalPosts.filterByStatus("published"))

    setAllPerPage(LocalPosts.posts)
  }, [itemPerPage])
  
  function filterData(status:any, value:any){
    setPage(1)
    if(status == "draft") {
      setTableData(draftData.slice(0, itemPerPage))
      setBtnStatus("draft")
      setAllPerPage(draftData)
    }
    if(status == "published") {
      setTableData(publishedData.slice(0, itemPerPage))
      setBtnStatus("published")
      setAllPerPage(publishedData)
    }
    if(status == "all") {
      setTableData(posts.slice(0, itemPerPage))
      setBtnStatus("all")
      setAllPerPage(posts)
    }
    if(status == "byTitle") {
      console.log(value)
      let newData = posts.filter((item: {title: any}) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
      })
      console.log("newData", newData)
      
      setTableData(newData.slice((page-1) * itemPerPage, (page) * itemPerPage))
      setAllPerPage(newData)
    }
  }

  return (
    <>
      <Head>
        <title>Zoftify assesment task</title>
        <meta name="description" content="Zoftify assesment task" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div >

        <div className={styles.top}>
          <Input onInput={(value:any) => filterData("byTitle", value)} type="text" width="432px" placeholder="Search" icon="assets/icons/search.png"/>
          <ActionButton handleClick={() => {router.push("/newpost")}} text="Create Post" />
        </div>

        <div className={styles.tabs}>
            <TabButton onClick={() => filterData("all", null)} type={(btnStatus == "all")? "default" : "secondary"} text="All statuses" count={posts.length}/>
            <TabButton onClick={() => filterData("draft", null)} type={(btnStatus == "draft")? "default" : "secondary"} text="Draft" count={draftData.length}/>
            <TabButton onClick={() => filterData("published", null)} type={(btnStatus == "published")? "default" : "secondary"} text="Published" count={publishedData.length}d/>
        </div>

        <Table data={tableData}/>
        <Pagination itemPerPage={itemPerPage} setItemPerPage={(value:any) => setItemPerPage(value)} page={page} setPage={(value:any) => setPage(value)} allPerPage={allPerPage} btnStatus={btnStatus} draftData={draftData} publishedData={publishedData} posts={posts} setTableData={(tableData:any) => setTableData(tableData)}/>
      </div>
    </>
  );
}

