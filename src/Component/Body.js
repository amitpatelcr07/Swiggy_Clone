import { restorantList } from "../constant";
import RestaurantCard from "./RestorantCard";
import { useState } from "react";
let filterValue;

const Body=()=>{

const [searchText,setSearchText]=useState("")
const [filterData,setFilterData]=useState(restorantList);


       const setSearchHandler=(e)=>{
           setSearchText(e.target.value);
       }


       const  getSearchHandler=()=>{

        getFilterData(searchText)
        
       }

       const getFilterData=(searchText)=>{
        filterValue= restorantList.filter((value,index)=>{
          return value.info.name.includes(searchText);
          
         })
         setFilterData(filterValue);
       }

    return <>
    <div>
        <input type="text" value={searchText} onChange={setSearchHandler}  /><button onClick={getSearchHandler} >Search</button>
    </div>
      <div className='restaurant-list'>
      {filterData?.map((val,ind)=>{
        return <>
          <RestaurantCard restorant={val} key={val.info.id}/>
        </>
      })}
      
      </div>
    </>
  }


  export default Body;