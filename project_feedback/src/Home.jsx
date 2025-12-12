import React, { useContext } from 'react'
import DataContext from './context/DataContext'

export const Home = () => {
    const{searchResult}=useContext(DataContext)
  return (
    <div className="post-card">{
    searchResult.map((post)=>
    <div key={post.id}>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-date">{post.datetime}</p>
      <p className="post-body">{post.body}</p>
      <hr/>
      </div>
      )
    }</div>
  )
}
