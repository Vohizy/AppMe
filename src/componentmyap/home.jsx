import React from "react";
import { Card } from "../componentEcommerce/card";

export const Home=()=>{
    const i='../img/anicet.jpg'
 return<>
    <div className="navigateur">
        <div className="navbar">
            <div className="Logo">Fitiavantsika <span className="text"> Je t'aime de tout mon coeur</span></div>
        </div>

        <div className="description">
            <h1>Tongasoa Ho Antsikaroa eto bb! </h1>
        </div>
        {/* <div className="img">
            <img src={i}/>
        </div> */}
    </div>
    <div className="bar">
        <Card />
        <Card />
        <Card />
    </div>
 </>
}