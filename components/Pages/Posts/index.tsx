import React, {useEffect} from 'react';
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
  const tableData = useAppSelector(state => state.posts.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let LocalPosts = new LocalStorage()
    dispatch(addPost(LocalPosts.posts))
  }, [])

  return (
    <>
      <Head>
        <title>Zoftify assesment task</title>
        <meta name="description" content="Zoftify assesment task" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className={styles.main}>

        <div className={styles.top}>
          <Input type="text" width="432px" placeholder="Search" icon="assets/icons/search.png"/>
          <ActionButton handleClick={() => {router.push("/newpost")}} text="Create Post" />
        </div>

        <div className={styles.tabs}>
            <TabButton type="default" text="All statuses" count="20"/>
            <TabButton type="secondary" text="Draft" count="1"/>
            <TabButton type="secondary" text="Published" count="19"/>
        </div>

        <Table data={tableData}/>
      </div>
    </>
  );
}

