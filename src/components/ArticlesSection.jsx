import React, { useEffect, useState } from 'react'
import Card from "./Card"


const ArticlesSection = () => {



  return (

    <>
    <div className="articles-two row">


        <div className="row">

            <div className="col-12 col-md-6">  
            <Card
             kartinShekli="/assets/images/blog1.jpeg"
              kartinBasligi ="The truth about ReactJS" 
              kartinParaqrafi ="Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened....."    />
               </div>

            <div className="col-12 col-md-6">
               <Card
                kartinShekli="/assets/images/blog2.png" 
                kartinBasligi ="How to solve an unsolvable conflict"
                 kartinParaqrafi ="Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened....."    /> 
                 </div>

        </div>

    </div>



   <div className="articles-three">

   <div className="row">  

        <div className="col-12 col-md-6 col-lg-4"> 
         <Card 
         kartinShekli="/assets/images/blog3.png"
          kartinBasligi ="The truth about ReactJS" 
          kartinParaqrafi ="Sigh, it’s like we can’t catch a break. So much has happened over the past......." /> 
        </div>

        <div className="col-12 col-md-6 col-lg-4">  
        <Card 
        kartinShekli="/assets/images/blog4.png" 
        kartinBasligi ="Gaffer. Case Study" 
        kartinParaqrafi ="Sigh, it’s like we can’t catch a break. So much has happened over the past......."    /> 
        </div>

        <div className="col-12 col-md-6 col-lg-4">  
        <Card 
        kartinShekli="/assets/images/blog5.png" 
        kartinBasligi ="How to solve an unsolvable conflict " 
        kartinParaqrafi ="Sigh, it’s like we can’t catch a break. So m....."    /> 
        </div>

        <div className="col-12 col-md-6 col-lg-4"> 
         <Card
          kartinShekli="/assets/images/blog6.png"
           kartinBasligi ="The truth about ReactJS"
            kartinParaqrafi ="Sigh, it’s like we can’t catch a break. So m....."    /> 
            </div>

        <div className="col-12 col-md-6 col-lg-4">  
        <Card
         kartinShekli="/assets/images/blog7.png"
          kartinBasligi ="Gaffer. Case Study"
           kartinParaqrafi ="Sigh, it’s like we can’t catch a break. So m....."    /> 
           </div>

        <div className="col-12 col-md-6 col-lg-4"> 
         <Card
          kartinShekli="/assets/images/blog8.png" 
          kartinBasligi ="How to solve an unsolvable conflict "
           kartinParaqrafi ="Sigh, it’s like we can’t catch a break. So m....."    /> 
           </div>


    </div>


   </div>

    

    </>
  )
}

export default ArticlesSection