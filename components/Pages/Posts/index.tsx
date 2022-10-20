import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'

import styles from './Posts.module.css'
import Input from '../../Inputs/Inputs'
import ActionButton from '../../Buttons/ActionButton'
import TabButton from '../../Buttons/TabButton'
import Table from '../../Table/Table'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addPost } from '../../../store/slices/posts';
import { LocalStorage } from '../../../utils/Posts';

export default function App (props: any) {
  const router = useRouter()
  const posts = useAppSelector(state => state.posts.value)
  const dispatch = useAppDispatch()

  const [tableData, setTableData] = useState([])
  const [draftData, setDraftData] = useState([])
  const [publishedData, setPublishedData] = useState([])
  const [btnStatus, setBtnStatus] = useState("all")

  useEffect(() => {
    let LocalPosts = new LocalStorage()
    dispatch(addPost(LocalPosts.posts))
    
    setTableData(LocalPosts.posts)
    setDraftData(LocalPosts.filterByStatus("draft"))
    setPublishedData(LocalPosts.filterByStatus("published"))

  }, [])

  function filterData(status:any, value:any){
    if(status == "draft") {
      setTableData(draftData)
      setBtnStatus("draft")
    }
    if(status == "published") {
      setTableData(publishedData)
      setBtnStatus("published")
    }
    if(status == "all") {
      setTableData(posts)
      setBtnStatus("all")
    }
    if(status == "byTitle") {
      console.log(value)
      let newData = posts.filter((item: {title: any}) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
      })
      console.log("newData", newData)
      
      setTableData(newData)
    }
  }

  function changeStatus(statusId:any, statusItem:any) {
    let LocalPosts = new LocalStorage()
    let newPosts = LocalPosts.changeStatus(statusId, statusItem)
    dispatch(addPost(newPosts))

    window.location.reload();    
  }

  return (
    <>
      <Head>
        <title>Zoftify assesment task</title>
        <meta name="description" content="Zoftify assesment task" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className={styles.main}>

        <div className={styles.top}>
          <Input onInput={(value:any) => filterData("byTitle", value)} type="text" width="432px" placeholder="Search" icon="assets/icons/search.png"/>
          <ActionButton handleClick={() => {router.push("/newpost")}} text="Create Post" />
        </div>

        <div className={styles.tabs}>
            <TabButton onClick={() => filterData("all", null)} type={(btnStatus == "all")? "default" : "secondary"} text="All statuses" count={posts.length}/>
            <TabButton onClick={() => filterData("draft", null)} type={(btnStatus == "draft")? "default" : "secondary"} text="Draft" count={draftData.length}/>
            <TabButton onClick={() => filterData("published", null)} type={(btnStatus == "published")? "default" : "secondary"} text="Published" count={publishedData.length}d/>
        </div>

        <Table data={tableData} changeStatus={(itemStatus: {statusId: number, statusItem: string}) => changeStatus(itemStatus.statusId, itemStatus.statusItem)}/>
      </div>
    </>
  );
}

