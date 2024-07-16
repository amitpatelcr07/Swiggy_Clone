import { IMG_CDN_URL } from "../constant";
const RestaurantCard=({restorant})=>{
    // console.log(props.restorant.info.name)
    let {name,avgRating,cloudinaryImageId,cuisines}=restorant.info;
    
     return <>
      <div className='Card'>
      <img src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2>{name}</h2>
       <h4>{avgRating} *</h4>
      <h4>{cuisines.length<20?cuisines.join(','):null}</h4>
      </div>
     </>
  }

  export default RestaurantCard;