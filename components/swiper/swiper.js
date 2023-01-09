import React, { useEffect, useState } from "react";
import Script from 'next/script'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



 const swipper = [
    {
        id:1,
        img:"bg-[url(../styles/img/slider.jpg)]"
    },
    {
        id:2,
        img:"bg-[url(../styles/img/slider2.jpg)]"

    },
    {
        id:3,
        img:"bg-[url(../styles/img/slider3.jpg)]"
    },
] 
let initValue = 1
const Swiper = () => {
const [render,setRender] = useState(swipper)
const [count,setCount] = useState(initValue)
useEffect(()=>{
    if(count == render[render.length - 1].id){
        setTimeout(()=>{
            setCount(1)
        },8000)
       }else{
        setTimeout(()=>{
            setCount(count+1)
        },8000)
       }
},[count])

const changeLeft = ()=>{
     if(count == 1){
        setCount(render[render.length - 1].id)
     }else{
        setCount(count-1)
     }
}

const changeRight = ()=>{
    if(count == render[render.length - 1].id){
        setCount(1)
    }else{
        setCount(count+1)
    }
}

  return (
      <div>
          <section className="slider index2">
              <div classNAmeName="hero-slider">
                  {
                    render.map(val=>{
                        if(val.id == count)
                        return(
                             <div key={val.id} data-aos="fade-up"  className={true && `${val.img}  single-slider flex`}>
                            <div className="md:flex hidden h-[100%] justify-center items-center">
                             <div onClick={changeLeft} className="w-[50px] flex cursor-pointer justify-center  hover:bg-[#000] duration-700 items-center h-[50px] rounded-[50%] bg-[#007bff]">
                                 <ChevronLeftIcon  style={{fill:'#fff'}} className="w-[35px]"/>
                             </div>
                             </div>
                           <div className="container">
                               <div className="row">
                                   <div className="col-lg-7">
                                       <div className="text">
     
                                           <h1 data-aos="fade-down-right">Biz sizga ishonishingiz mumkin bo'lgan <span>tibbiy</span> xizmatlarni
                                               taqdim <span>etamiz!</span></h1>
                                           <div className="button" >
                                               <a href="uchrashuv.html" className="btn">Uchrashuvni olish</a>
                                               <a href="#" className="btn primary">Batafsil ma'lumot</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="md:flex hidden h-[100%] justify-center items-center">
                             <div onClick={changeRight} className="w-[50px] flex cursor-pointer justify-center  hover:bg-[#000] duration-700 items-center h-[50px] rounded-[50%] bg-[#007bff]">
                                 <ChevronRightIcon  style={{fill:'#fff'}} className="w-[35px]"/>
                             </div>
                             </div>
                         
                       </div>   
                        )
                    })
                  }
              </div>
          </section>
          <Script src="../../styles/js/owl-carousel.js" defer={true}/>
      </div>
  )
};
export default Swiper;