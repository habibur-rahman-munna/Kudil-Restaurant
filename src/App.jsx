import Footer from "./Layouts/Footer";
import "./index.css"
import Header from "./Layouts/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;
