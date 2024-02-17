import About from "./views/About"
import Contact from "./views/Contact"
import Homepage from "./views/Homepage"
import SiteNav from "./layout/SiteNav"
import { Routes, Route } from "react-router-dom"
import Reservation from "./views/Reservation"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react";

function App() {
  const { i18n } = useTranslation()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to showcase the loading animation
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <div style={{ direction: `${i18n.language === 'ar' ? 'rtl' : ''}` }}>
      {isLoading ?
        <>
          <div className="cssload-loader-inner">
            <div className="cssload-cssload-loader-line-wrap-wrap">
              <div className="cssload-loader-line-wrap"></div>
            </div>
            <div className="cssload-cssload-loader-line-wrap-wrap">
              <div className="cssload-loader-line-wrap"></div>
            </div>
            <div className="cssload-cssload-loader-line-wrap-wrap">
              <div className="cssload-loader-line-wrap"></div>
            </div>
            <div className="cssload-cssload-loader-line-wrap-wrap">
              <div className="cssload-loader-line-wrap"></div>
            </div>
            <div className="cssload-cssload-loader-line-wrap-wrap">
              <div className="cssload-loader-line-wrap"></div>
            </div>
          </div>
        </>
        :

        <>
          <SiteNav />

          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/reservation" Component={Reservation} />
          </Routes>
        </>
      }

    </div>
  )
}

export default App
