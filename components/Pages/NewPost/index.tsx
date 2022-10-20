import React, { useEffect } from 'react';
import Head from 'next/head'

import { useAppSelector, useAppDispatch } from '../../../store/hooks'


import styles from './New.module.css'
import Input from '../../Inputs/Inputs'
import ActionButton from '../../Buttons/ActionButton'
import Table from '../../Table/Table'
import Select from '../../Select/Select';
import DataPicker from '../../DatePicker/DataPicker';
import { addPost } from '../../../store/slices/posts';
import { LocalStorage } from '../../../utils/Posts';

export default function NewPost (props: any) {

  const posts = useAppSelector((state) => state.posts.value)
  const dispatch = useAppDispatch()
  
  console.log("posts", posts)


  useEffect(() => {
    let LocalPosts = new LocalStorage()
    dispatch(addPost(LocalPosts.posts))
    console.log("local => " , LocalPosts.posts)
  }, [])

  function createPost(){
    console.log("Ishlaypati")
  }

  function handleSubmit(e:any) {
    e.preventDefault()
    let LocalPosts = new LocalStorage()
    let data = {
      title: e.target.elements.title.value,
      status: e.target.elements.status.value,
      time: e.target.elements.time.value,
      id: LocalPosts.lastId + 1
    }
    dispatch(addPost(data))
    
}
  
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
          <form onSubmit={handleSubmit}>
            <Input id="title" type="text" placeholder="Title"/>
            <Select id="status"/>
            <DataPicker id="time"/>
            <ActionButton type="submit" className="mt-8" text="Submit"/>
          </form>
        </div>
      </div>
    </div>
  );
}

