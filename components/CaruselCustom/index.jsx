import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../../styles/img/section-img2.png"

import testi1 from "../../styles/img/testi1.png"
import testi2 from "../../styles/img/testi2.png"
import testi3 from "../../styles/img/testi3.png"
import { useEffect } from 'react'


export const SliderArray = [
    {
        id:1,
        name:"Ruhfayed Sakib",
        img:testi1
    },
    {
        id:2,
        name:"Shakil Hossain",
        img:testi2
    },
    {
        id:3,
        name:"Naimur Rahman",
        img:testi3
    },
    {
        id:4,
        name:"Ruhfayed Sakib",
        img:testi1
    },
    {
        id:5,
        name:"Shakil Hossain",
        img:testi2
    },
    {
        id:6,
        name:"Naimur Rahman",
        img:testi3
    },
    {
        id:7,
        name:"Shakil Hossain",
        img:testi1
    },
    {
        id:8,
        name:"Ruhfayed Sakib",
        img:testi2
    },
    {
        id:9,
        name:"Naimur Rahman",
        img:testi3
    },
]

let initValue = 1
let oldValue = 3

const index = () => {
    const [value,setValue] = useState(initValue)
    const [slide,setSlide] = useState(oldValue)

useEffect(()=>{
    if(slide == SliderArray[SliderArray.length - 1].id){
        setTimeout(()=>{
            setValue(initValue)
            setSlide(oldValue)
        },7)
    }else{
        setTimeout(()=>{
            setValue(p=>p+3)
            setSlide(pre=>pre+3)
        },10000)
    }

},[value,slide])

  return (
    <section class="section testimonials overlay" data-stellar-background-ratio="0.5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h2>Bemorlarimiz tibbiy muolajalarimiz haqida nima deyishadi</h2>
                    <Image src={logo} alt="#" />
                </div>
            </div>
        </div>
         

         <div>

         <div class="row">
            <div class="col-lg-12 col-12">
                <div class=" testimonial-slider flex flex-wrap">
                
                    {
                        SliderArray.map((val)=>{
                            if(value <= val.id && slide >= val.id)
                            return(
                   <div key={val.id} class="w-[30%] single-testimonial" data-aos="fade-left"
                   data-aos-anchor="#example-anchor"
                   data-aos-offset="500"
                   data-aos-duration="500">
                        <Image src={val.img} alt="#" />
                        <p>Lorem ipsum dolor sit amet consectetur eliet adipiscing. Aliquam nec suscipit turpis, vel pretium eros. </p>
                        <h4 class="name">{val.name}</h4>
                    </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        </div>
         </div>



    </div>
</section>
  )
}

export default React.memo(index)