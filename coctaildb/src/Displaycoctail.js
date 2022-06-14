import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Displaycoctail = (props) => {
  const setitem=(id)=>{
    localStorage.setItem("id",JSON.stringify(id));
    //  console.log(id);
  }
  return (
    <>
        <div className="item">
            <div className="card">
            <div className="itemimg">
                <img src={props.im} alt="" className="coctailimg"/>
            </div>
            <div className="iteminfo">
                <h3>{props.drink}</h3>
                <h3>{props.glass}</h3>
                <h5>{props.alcholol}</h5>
            </div>
            <Link to="displayinfo">
            <button className="detail" id={props.id} onClick={()=>setitem(props.id)}>Detail</button></Link>
        </div>
        </div>

    </>
  )
}

export default Displaycoctail