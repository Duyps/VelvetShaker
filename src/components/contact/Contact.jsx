import React, {useEffect, useForm} from 'react'
import Footer from '../common/footer/Footer'
import AboutFAQ from '../about/AboutFAQ'
import { homeContact_contact, homeContact_visit, homeContact_social, AboutFaq } from '../../data'
import './contact.css'
import Header from '../common/header/Header'


function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
  return (
    <>
    <div className="booking">
        <div className="headings">
            <h2>(booking and contact)</h2>
            <h1>Join us in Hong Kong</h1>
        </div>
        <div className="contents">
            <div className="left-col">
                <div className="bookNow">
                    <h3>Book now</h3>
                    {homeContact_contact.map((val) => (
                        <div className="decs">
                            <h4>{val.heading}</h4>
                            <p>{val.decs}</p>
                        </div>
                    ))}
                </div>
                <div className="visitUs">
                    <h3>Visit us</h3>
                    {homeContact_visit.map((val)=> (
                        <div className="decs">
                            <h4>{val.heading}</h4>
                            <p>{val.decs}</p>
                        </div>
                    ))}
                </div>
                <div className="socials">
                    <h3>Socials</h3>
                    {homeContact_social.map((val)=> (
                        <div className="decs">
                            <h4>{val.heading}</h4>
                            <p>{val.decs}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-col">
                <div className="form">
                    
                </div>
            </div>
        </div>
        
    </div>
    <AboutFAQ/>
    <Footer/>

    </>
    
  )
}

export default Contact