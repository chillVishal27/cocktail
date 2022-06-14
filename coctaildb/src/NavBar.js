import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Displaycoctail from './Displaycoctail';
import logo from "./logo.svg"
const NavBar = () => {
  const [word,SetWord] = useState("");
  const [arr,setArr] = useState([]);
  const [val,setVal] = useState("");
  const [load,setLoad] = useState(false);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`
  const imglink = "http://ajaxloadingimages.net/gif/image?imageid=winphone-2&forecolor=000000&backcolor=ffffff";
  const changeword =(e)=>{
    if(e.target.value === "")fetchdata()
    console.log(e.target.value)
    SetWord(e.target.value)
     setLoad(true)
  }
  const fetchdata = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setArr(data.drinks);
    setLoad(false);
  }
  const setvalue=()=>{
    setVal(word);
     setLoad(true)
    fetchdata()
  }
   useEffect(()=>{
     fetchdata()
   },load)
  return (
    <>
    <div className="navbarcontainer">
      <div className="imgsrc">
          <img src={logo} alt="" className="img1"/>
       </div>
    <div className="navbarlinks">
    <Link to="/">HOME</Link>
    <Link to="About">ABOUT</Link>    
    </div>
    </div>
    <div className="search" onChange={changeword}>
      <input type="text" placeholder="search here"/>
      <button onClick={setvalue} className="button">Search</button>
      </div>
      {
         load && <img src={imglink} alt="" className="loading"/>
        }
      <div className="apicomponent">
      {
          arr ?
           arr.map((item)=>{
            return(
             <Displaycoctail im={item.strDrinkThumb} id={item.idDrink}
             drink={item.strDrink} glass={item.strGlass}
              alcholol={item.strAlcoholic}  
            />
            )
          }):<div className="notfound">Oops! Item Not Found</div>
        }
        </div>
    </>
  )
}

export default NavBar