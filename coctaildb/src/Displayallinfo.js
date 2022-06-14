
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import NavBar from './NavBar';
const Displayallinfo = () => {
    const [id,setId] = useState("");
    const [obj,setObj] = useState([]);
    const [val,setVal] = useState(0);
    
    const url = `https:/www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const imglink = "http://ajaxloadingimages.net/gif/image?imageid=winphone-2&forecolor=000000&backcolor=ffffff";
    const [load,setLoad] = useState(true);
    useEffect(()=>{
      setitem();
  },[val])
useEffect(()=>{
  fetchdata()
},[id])
  const setitem=async()=>{
      setId(JSON.parse(localStorage.getItem("id")))
}

    const fetchdata = ()=>{
      if(id !== ""){
      axios.get(url).then((response)=>{
        console.log(response)
        setObj(response.data.drinks);
    
          setLoad(false)
          console.log(obj)
      }).catch((e)=>{
        console.log("hello")
          })
        }
      }
      
  return (
  
  <>
  {
     load && <img src={imglink} alt="" className="loading"/>

  }
   {
    obj.length != 0 && <div className="displayaooinfo">  
             <div className="displayall_img">
        <img src={obj[0].strDrinkThumb} alt="" className="displaysingleimg" height="500px"/>
        </div>
            <div className="allinfo"> 
            <p className="infoofimg">{obj[0].strDrink}</p>
            <p className="infoofimg">{obj[0].strCategory}</p>
            <p className="infoofimg">{obj[0].strGlass}</p>
            <p className="infoofimg">{obj[0].strIngredient1}</p>
            <p className="infoofimg">{obj[0].strIngredient2}</p>
            </div>
        </div> 
    }
  </>
  )
}

export default Displayallinfo