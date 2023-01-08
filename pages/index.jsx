import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from 'react-redux';
import Swiper from '../components/swiper/swiper.js'
import Futures from "../components/Feautes"
import FunFacts from "../components/FunFacts";
import WhyChoose from "../components/WhyChoose"
import CallAction from "../components/CallAction"
import Service from "../components/Service"
import Testimonials from "../components/Testimonials"

export const  getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
 function Home() {
  const router= useRouter();
  const userList = useSelector(state => state.users.userList);
  const {locale} = router;
  const {t} = useTranslation("common");
  return (
    <div className=''>
      
      <Swiper />
      {/* <Futures /> */}
      <FunFacts />
      <WhyChoose />
      <CallAction />
      <Service />
      {/* <Testimonials /> */}

      {/* <footer>
        <nav>
       {userList.map((el, index) => (
        <div key={index}>
           <span>name: {el.name}</span>FunFacts
        </div>
       ))}
        </nav>
      </footer> */}


    

    </div>
  )
};
export default Home;
