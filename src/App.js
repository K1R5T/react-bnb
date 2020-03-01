import React, { Component } from 'react';
import Bnb from './components/Bnb';
import './App.css';


class App extends Component {
  state = {
  bnbs: [
    {
      src:require("./img/bed1.jpg"),

      title:"Karpimo & Fertimo Suites, Aspa House",

      reviewer:"John 2 months ago",

      content:"Lounge under a thatch parasol by the shared pool and soak up the blend of luxury and authenticity at a classic whitewashed hideaway. This retreat is tucked away on a pedestrian alley lined with traditional homes dating back to the 14th century.", 
      
      review:"Lakovos is a wonderful host. He recommended restaurants, things to do and places to see. The property is very modern, stylish, clean and in a central location. I'd highly recommend staying here (ideally with a hire car to explore the island fully!).", 
      
      rating:"Rating: 4.96"
    },
    {
      src:require('./img/bed2.jpg'), 

      title:"Unique 1 bedroom villa in Seminyak", 

      reviewer:"Carol 2 weeks ago", 

      review:"Absolutely stunning Villa, spotlessly cleaned daily and well maintained pool. Sofia is the perfect host, friendly and very very helpful. Would highly recommend a visit", 

      content:"New,inspirational,very charming,one bedroom villa with swimming pool in Seminyak area will definitely introduce you from the beginning to the luxury and relaxation that only Bali is able to offer", 

      rating:"Rating: 4.94"
    },
    {
      src:require('./img/bed3.jpg'),

      title: "White Breeze Pool 1BD Apartment",

      reviewer: "Slavo 3 months ago",

      review: "Exceptional propertyin a quiet location not far away from Rawai, about 15mins walk. Staff is local and their hospitality is really outstanding. When we come back to Phuket, will book again if available.",

      content: "1 bedroom apartment with a king size bed, bathroom, a kitchen and dining/living area with a pull out sofa. It has a direct access from the bedroom to the pool which is shared with only 2 more apartments.Our guests are mainly travelers and tourists who like to be independent and therefore prefer to live in a flat rather than a hotel. They alone take care of their comfort as well as cleaning, washing the dishes, waste disposal, etc.",

      rating: "Rating: 4.67"
    }

    ]
}

render() {
  const eachBnb = this.state.bnbs.map ((bnb,index) => {
    return <Bnb 
    src={bnb.src} 
    reviewer= {bnb.reviewer} 
    property ={bnb.property} 
    content = {bnb.content} 
    review = {bnb.review}  
    rating={bnb.rating} 
    title={bnb.title} 
    key = {index} />
})

return(
<div className="App">
  <h1 className="header">B&B Available Places</h1>
  <div className="each">
  {eachBnb}
  </div>
</div>
    );
  }
}
export default App;
