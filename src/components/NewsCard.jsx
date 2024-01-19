import React from 'react'
import NewsImage from '../components/news.png'
import './NewsCard.css'

const NewsCard = ({title,description,url,imageUrl}) => {
  return (
    <>
       
       <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2"   style={{maxWidth:'263px'}}>
          <img src={imageUrl?imageUrl:NewsImage} style={{width:'245px',height:'130px'}}className="card-img-top" alt="IMAGE"/>
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"information about what just took place"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
          </div>
    </div>
    </>
  )
}

export default NewsCard
