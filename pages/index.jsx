import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useSelector } from 'react-redux';
import Swiper from '../components/swiper/swiper.js'
import IndexHeader from "../components/indexHeader/index.jsx";
import HomeAction from "../components/HomeAction"
import Departament from "../components/Departament"
import Pricing from "../components/Pricing"
import Blog from "../components/Blog"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
<<<<<<< HEAD
});
function Home() {
  const router = useRouter();
  const userList = useSelector((state) => state.users.userList);
=======
})
function Home() {
  const router = useRouter();
  const userList = useSelector(state => state.users.userList);
>>>>>>> e8f8ebbebb8c125eba3880e2fa1e584aa75ddbec
  const { locale } = router;
  const { t } = useTranslation("common");
  return (

    <div className=''>

      <Swiper />
      <IndexHeader />
      <HomeAction />
      <Departament />
<<<<<<< HEAD
     <Pricing /> 
     <Blog />
      {/* <footer>
        <nav>
       {userList.map((el, index) => (
        <div key={index}>
           <span>name: {el.name}</span>FunFacts
        </div>
       ))}
        </nav>
      </footer> */}
=======
      <Pricing />
      <Blog />



>>>>>>> e8f8ebbebb8c125eba3880e2fa1e584aa75ddbec
    </div>
  );
}
export default Home;
