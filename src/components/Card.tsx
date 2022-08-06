import React, { useState } from 'react';
import {ICard} from '../models'


interface CardProps{
    cards:ICard
}

export function Card(props:CardProps){
 const[description,setDescription]= useState(false)
   
    return(
    <div className="conteiner">
        <div className="head">{props.cards.Name }</div>
        <div className="mainBody">
            <div className="picture"> <img src={props.cards.image}/></div>
            <div className="description">
                <p><span>Имя:</span> {props.cards.Name}</p>
                <p><span>Порода:</span> {props.cards.poroda}</p>
                <p><span>Возраст:</span> {props.cards.fullYearsOld}</p>
                <p><span>Cтрана происхождения:</span> {props.cards.country}</p>
                <p><span>вес:</span> {props.cards.weight}</p>
                <p className="lsDesc">{props.cards.description}</p>
               
            </div>
        </div>
        <div className="footer">
            <button 
                onClick={()=>setDescription(prev =>!prev)}
                >{description? 'Cкрыть':'Подробнее..'}</button>
                {description && <p>{props.cards.allDescription}</p>}
        </div>
        
     </div>
  
    )
}