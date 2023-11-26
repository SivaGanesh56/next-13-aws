import Footer from "../components/Footer";
import Header from "../components/Header";

import './index.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8">
      <Component {...pageProps} />
      </main>
      
      <Footer/>
    </div>
  );
}

export default MyApp;
