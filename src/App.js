import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Main from "./body/Main";
import WeddingHall from "./body/WeddingHall";
import NavBar from "./body/NavBar";
import Footer from "./footer/Footer";
import SdmBoard from "./sdm/SdmBoard";
import Coma from "./weddingItem/Coma";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Join from "./login/Join";
import Travel from "./travel/Travel";
import MyPage from "./body/mypage/MyPage";
import ExitSite from "./body/mypage/ExitSite";
import MyAccount from "./body/mypage/MyAccount";
import MyQna from "./body/mypage/MyQna";
import MyReivew from "./body/mypage/MyReivew";
import MyWedding from "./body/mypage/MyWedding";
import MyBookList from "./body/mypage/MyBookList";
import MyOrder from "./body/mypage/MyOrder";
import MyBookmark from "./body/mypage/MyBookmark";
import MyCart from "./body/mypage/MyCart";
import UpdateUser from "./login/UpdateUser";
import SdmArticle from "./sdmArticle/SdmArticle";

function App() {
  return (
    <div>      
      <NavBar/>
      <Switch>
        <Route path={['/','/main']} exact><Main/></Route>
        <Route path={['/sdm']}><SdmBoard/></Route>
        <Route path={['/weddingHall']}><WeddingHall/></Route>
        <Route path={['/weddingItem']}><Coma/></Route>
        <Route path={['/login']}><Login/></Route>
        <Route path={['/signup']}><SignUp/></Route>
        <Route path={['/join']}><Join/></Route>
        <Route path={['/travel']}><Travel/></Route>
        <Route path={['/myPage']}><MyPage/></Route>
        <Route path={['/exitSite']}><ExitSite/></Route>
        <Route path={['/myAccount']}><MyAccount/></Route>
        <Route path={['/myQna']}><MyQna/></Route>
        <Route path={['/myReview']}><MyReivew/></Route>
        <Route path={['/myWedding']}><MyWedding/></Route>
        <Route path={['/myBookList']}><MyBookList/></Route>
        <Route path={['/myOrder']}><MyOrder/></Route>
        <Route path={['/myBookmark']}><MyBookmark/></Route>
        <Route path={['/myCart']}><MyCart/></Route>
        <Route path={['/updateUser']}><UpdateUser/></Route>
      </Switch>
      {/* <SdmArticle/> */}
      <Footer/>
    </div>
  );
}

export default App;