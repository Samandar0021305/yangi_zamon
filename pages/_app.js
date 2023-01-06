import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Headers from '../components/Header/header'
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
function MyApp({ Component, pageProps }) {
  return <>
  <Provider store={store}>
  <Headers/>
  <Component {...pageProps} />
  </Provider>
  </>
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(appWithTranslation(MyApp))
