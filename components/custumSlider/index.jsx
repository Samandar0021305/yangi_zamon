import React, { useState } from 'react'
import logo from "../../styles/img/section-img.png"
import Image from 'next/image'

import pf1 from "../../styles/img/pf1.jpg"
import pf2 from "../../styles/img/pf2.jpg"
import pf3 from "../../styles/img/pf3.jpg"
import pf4 from "../../styles/img/pf4.jpg"
import { init } from 'aos'
import { useEffect } from 'react'


export const portfolioList = [
    {
        id:1,
        img: pf1
    },
    {
        id:2,
        img: pf2
    },
    {
        id:3,
        img: pf3
    },
    {
        id:4,
        img: pf4
    },
    {
        id:5,
        img: pf1
    },
    {
        id:6,
        img: pf2
    },
    {
        id:7,
        img: pf3
    },
    {
        id:8,
        img: pf4
    },
]

let initalStata = 4
let inital = 1
const index = () => {
   const [old,setOld] = useState(inital)
    const [slide,setSlide] = useState(initalStata)
 
useEffect(()=>{
    if(slide == portfolioList[portfolioList.length - 1].id){
       setTimeout(()=>{
        setSlide(initalStata)
        setOld(inital)
       },5000)
    }else{
        setTimeout(()=>{
            setSlide(pre=>pre+1)
            setOld(p=>p+1)
        },5000)
    }
},[slide,old])

  return (
    <section className="portfolio section" >
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>Kasalxonamiz ichida tozalik qoidalariga rioya qilamiz</h2>
                    <Image src={logo} alt="#" />
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-12">
                <div className="portfolio-slider flex">

                    {
                        portfolioList.map((val, id) => {
                            if(old <= val.id && val.id <= slide)
                            return (
                                <div key={id} className="single-pf w-[25%] wow fadeIn" data-aos="fade-left">
                                    <Image src={val.img} alt="#" />
                                    <a href="#" className="btn">Tafsilotlarni ko'rish</a>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default index