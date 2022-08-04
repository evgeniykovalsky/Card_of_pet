import React from "react";
import {ICard}  from '../models';
import myImage from '../img/index.jpg';


export const cards: ICard[]=[
    {
        id:1,
        Name:'Evgeniy',
        SurName:'Kovalsky',
        yearOfBorn:'25.05.1983',
        country:'Ukraine',
        fullYearsOld:'39',
        family:'женат',
        tell:'+38 067 611 85 56',
        email:'evgeniykovalsky04388@gmail.com',
        description:' Возможность командировок: да Водительское удостоверение: есть.Собственный автомобиль: есть. Вредные привычки отсутствуют.',
        allDescription:'Работоспособность, целеустремленность, стрессоустойчивость, умение работать в команде, дисциплинированность, аккуратность.',
        image:myImage
        
    }
]