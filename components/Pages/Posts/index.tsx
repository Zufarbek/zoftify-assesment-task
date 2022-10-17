import * as React from 'react';import { useRouter } from 'next/router'
import Head from 'next/head'


import styles from './Posts.module.css'
import Input from '../../Inputs/Inputs'
import ActionButton from '../../Buttons/ActionButton'
import TabButton from '../../Buttons/TabButton'
import Table from '../../Table/Table'
import Link from 'next/link'

export default function App (props: any) {
    const router = useRouter()
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

        <Table/>
      </div>
    </>
  );
}

