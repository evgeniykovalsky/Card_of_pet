import React, { useState } from 'react';
import {ICard} from '../models'


interface CardProps{
    cards:ICard
}

export function Card(props:CardProps){
 const[description,setDescription]= useState(false)
   
    return(
    <div className="conteiner">
        <div className="head">{props.cards.Name +'   '+ props.cards.SurName}</div>
        <div className="mainBody">
            <div className="picture"> <img src={props.cards.image}/></div>
            <div className="description">
                <p><span>Имя:</span> {props.cards.Name}</p>
                <p><span>Фамилия:</span> {props.cards.SurName}</p>
                <p><span>Возраст:</span> {props.cards.fullYearsOld}</p>
                <p><span>Семейное положение:</span> {props.cards.family}</p>
                <p><span>Cтрана:</span> {props.cards.country}</p>
                <p><span>Тел.:</span> {props.cards.tell}</p>
                <p><span>Email:</span> {props.cards.email}</p>
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