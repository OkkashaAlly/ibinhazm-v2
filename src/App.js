import "./style/App.scss";

import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import Main from "./layout/Main";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";
import Message from "./components/shared/Message";
import BookPreview from "./components/BookPreview";
import BuyDownload from "./layout/BuyDownload";
import { BooksProvider } from "./context/BooksContext";

function App() {
  return (
    <>
      <BooksProvider>
        <Header />
        <Navigation />
        <Main />
        <Aside />
        <Footer />
        {/* <Message message={"Unknown error"} type={"err"} /> */}
        <BuyDownload />
        {/* <BookPreview /> */}
      </BooksProvider>
    </>
  );
}

export default App;
