import React from 'react'

const ReviewCard = ({name, text, rating}) => {
    const starsIcon = Array(5).fill().map((s, i)=>{
        if(rating === 0){
            return <i class="bi bi-star" ></i>
        } 
        if(i<rating){
            return <i class="bi bi-star-fill" ></i>
        }else{
            return <i class="bi bi-star" ></i>
        }
    })
    return (
        <div className='reviewcard card' style={{width:'18rem',  margin:'10px auto', background:'darkgrey'}}>
            <h4>Review</h4>
            <div className="card-body">
            <h5 className="card-title">Name : {name}</h5>
           <h2>{starsIcon}</h2> 
            <q>{text}</q>
            </div>
          
        </div>
    )
}

export default ReviewCard
