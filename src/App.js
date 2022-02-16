import "./style/App.scss";

import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import Main from "./layout/Main";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";
// import BuyDownload from "./layout/BuyDownload";

function App() {
  return (
    <>
      <div id="home">
        <Header />
        <Navigation />
        <Main />
        <Aside />
        <Footer />
        {/* <BuyDownload /> */}
      </div>
    </>
  );
}

export default App;
