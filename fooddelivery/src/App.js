import './App.css';

import { useEffect } from "react";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import BannerName from './Components/BannerName';
import SubMenuContainer from "./Components/SubMenuContainer";
import {AccountBalanceWalletRounded,Chat,Favorite,HomeRounded,Settings,SummarizeRounded,} from "@mui/icons-material";

function App() {

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive)); 
    }, []);

  return (
    <div className="App">
      {/* Header Senction */}
      <Header />

      {/* Main Container */}

      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Salma"} discount={"20"} link={"#"} />
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt="" 
              className="deliveryPic"
            />
          </div>
          {/* dishContainer*/}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer"></div>
            <div className="dishitemContainer"></div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main> 

      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
