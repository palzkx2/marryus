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
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;