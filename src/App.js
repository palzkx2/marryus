import Main from "./body/Main";
import NavBar from "./body/NavBar";
import WeddingHall from "./body/WeddingHall";
import Footer from "./footer/Footer";
import SdmBoard from "./sdm/SdmBoard";

function App() {
  return (
    <div>
      <NavBar/>
      <Main/>
      <Footer/>
      <SdmBoard/>
      <WeddingHall/>
    </div>
  );
}

export default App;