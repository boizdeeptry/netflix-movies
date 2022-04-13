import "./App.scss";
import "swiper/swiper.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <div className="content">
              <Routes />
            </div>
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
