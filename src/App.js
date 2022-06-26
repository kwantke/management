
import './App.css';
import Hello from './component/Hello'
import Welcome from './component/Welcome'
import World from "./component/World";
import styles from "./App.module.css"
import Header from "./component2/Header";
import DayList from "./component2/DayList";
import Day from "./component2/Day";
import EmptyPage from "./component2/EmptyPage";
import {BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
    console.log("App");
 /* const name = "Tom";
  const user = {
    name :"Jane"
  }
  const naver = {
    name: "네이버",
    url: "https://naver.com"
  }*/
  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<DayList />} />
                  <Route path="/day/:day" element={<Day />} />
                  <Route path="*" element={<EmptyPage/>} />
              </Routes>
             {/* <h3>props:properties</h3>
            <Hello age={10}/>
            <Hello age={20}/>
            <Hello age={30}/>*/}
           {/* <div className={styles.box}>App</div>*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
