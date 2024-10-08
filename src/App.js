import Main from "./body/Main";
import MyPage from "./body/mypage/MyPage";
import NavBar from "./body/NavBar";
import WeddingHall from "./body/WeddingHall";
import Footer from "./footer/Footer";
import SdmBoard from "./sdm/SdmBoard";

function App() {
  return (
    <div>
      <NavBar/>
      <MyPage/>
      <Footer/>
      {/* <WeddingHall/> */}
      {/* <Main/>
      <SdmBoard/> */}
    </div>
  );
}

export default App;