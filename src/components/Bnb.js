import React from 'react';
import Image from './Image';
import Property from './Property';
import Reviewer from './Reviewer';
import Review from './Review';
import Rating from './Rating';
import Title from './Title';

const Bnb = (props) =>{
    return(
      <div className="allinone">
        <Title title={props.title} />
        <Image src={props.src} alt={props.alt} />
        <Rating src={props.rate} alt={props.alt} rating={props.rating}/>
        <Reviewer reviewer ={props.reviewer}/>
        <Review review={props.review}/>
        <Property content={props.content}/>
      </div>
    )
  }

  export default Bnb;