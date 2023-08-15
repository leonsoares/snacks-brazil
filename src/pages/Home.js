import { Outlet, Link } from "react-router-dom";
import Menu from '../modules/Menu'
import BgVideo from '../modules/Bg-video';
import Ourproduct from '../modules/Our-product'
import Footer from '../modules/Footer'

const Home = () => {
    return (
        <div className="App">
          <div style={{'width': '100%', 'marginLeft': 'auto', 'marginRight': 'auto','display': 'flex', 'justifyContent': 'center'}}>
            
          </div>
          <Menu></Menu>
          <BgVideo></BgVideo>
          <Ourproduct></Ourproduct>
          <Footer></Footer>
          
          
        </div>
      );
};

export default Home;