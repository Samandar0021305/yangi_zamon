import React, { useState ,useEffect,useCallback} from 'react'
import logo from "../../styles/img/section-img.png"
import Image from 'next/image'

import pf1 from "../../styles/img/pf1.jpg"
import pf2 from "../../styles/img/pf2.jpg"
import pf3 from "../../styles/img/pf3.jpg"
import pf4 from "../../styles/img/pf4.jpg"


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

let minValue = 1
let maxValue = 2
let initalStata = 4
let inital = 1
const index = () => {
      const [max,setMax] = useState(maxValue)
    const[min,setMin] = useState(minValue)
   const [old,setOld] = useState(inital)
    const [slide,setSlide] = useState(initalStata)
 

    useEffect(()=>{
        if(min === portfolioList[portfolioList.length - 1].id){
           setTimeout(()=>{
            setMin(minValue)
            // setMax(maxValue)
           },4000)
        } else{
            setTimeout(()=>{
                setMin(pre=>pre+1)
            },7000)
        }
    },[max,min])

    const relativeFunc = useCallback(()=>{
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
    })

useEffect(()=>{
  (relativeFunc)
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
        <div className="row hidden none md:flex">
            <div className="col-lg-12 col-12 hidden md:flex">
                <div className="portfolio-slider hidden md:flex justify-center items-center">

                    {
                        portfolioList.map((val, id) => {
                            if(old <= val.id && val.id <= slide)
                            return (
                                <div key={id} className="single-pf w-[20%] mx-[8px] hidden md:flex wow fadeIn" data-aos="fade-left">
                                    <Image src={val.img} alt="#" />
                                    <a href="#" className="btn">Tafsilotlarni ko'rish</a>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>



        <div className="row flex md:hidden">
            <div className="col-lg-12 col-12">
                <div className="portfolio-slider flex justify-center items-center">

                    {
                        portfolioList.map((val, id) => {
                            if(val.id === min)
                            return (
                                <div key={id} className="single-pf w-[75%] mx-[4px] wow fadeIn" data-aos="fade-left">
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

export default React.memo(index)