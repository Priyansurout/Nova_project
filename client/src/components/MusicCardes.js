import React from 'react'
import music_img from './good.webp'




export default function MusicCardes(props) {


  return (
    <>
        <div className='my-2'>
        <div className="card" style={{width: "18rem"}}>
          
            <img className="card-img-top" src={props.music_img?props.music_img:  music_img} alt="NOT FOUND"/>
            <div className="card-body">
                <h5 className="card-title"><span className="badge rounded-pill bg-danger my-2">{props.name_music? props.name_music.charAt(0).toUpperCase() + props.name_music.slice(1) : "NAME of Music"}</span></h5>
                <p className="card-text">We make music better</p>
                <p className="card-text"><small className="text-muted">By the music</small></p>
                <a href={props.uri} target="_blank" className="btn btn-primary">Know More</a>
                
                {/* <span className="badge rounded-pill bg-danger">it is working here</span> */}
                
            </div>
        </div>
      </div>
      

    </>

  )
}
