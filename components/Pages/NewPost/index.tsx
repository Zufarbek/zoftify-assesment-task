import * as React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'


import styles from './New.module.css'
import Input from '../../Inputs/Inputs'
import ActionButton from '../../Buttons/ActionButton'
import TabButton from '../../Buttons/TabButton'
import Table from '../../Table/Table'
import Select from '../../Select/Select';
import DataPicker from '../../DatePicker/DataPicker';

export default function NewPost (props: any) {
    const router = useRouter()
  return (
    <div>
      <Head>
        <title>Zoftify assesment task</title>
        <meta name="description" content="Zoftify assesment task" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className={styles.new__post__section}>
        <h3 className={styles.title}>Post information</h3>

        <div className={styles.post__form}>
          <Input type="text" placeholder="Title"/>
          <Select/>
          <DataPicker/>
          <ActionButton text="Submit" className="mt-8"/>
        </div>

      </div>
    </div>
  );
}

