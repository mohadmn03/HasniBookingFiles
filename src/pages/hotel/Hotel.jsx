import React from 'react'
import "./Hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

const Hotel = () => {
  const photos = [
    {
      src: "https://wallpaperaccess.com/full/321145.jpg"
    },
    {
      src: "https://wallpaperaccess.com/full/321142.jpg"
    },
    {
      src: "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/833be8b5-9db0-4e10-b89d-737d6394ade9/nature-wallpaper20.jpg"
    },
    {
      src: "https://wallpaperaccess.com/full/321143.jpg"
    },
    {
      src: "https://wallpaper.dog/large/10950072.jpg"
    },
    {
      src: "https://wallpaperaccess.com/full/24247.jpg"
    }
  ]
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon className='faIcon closeIcon' icon={faCircleXmark} onClick={()=>{setOpen(false)}} />
          <FontAwesomeIcon className='faIcon left' icon={faCircleArrowLeft} onClick={()=>{setSlideNumber(slideNumber - 1 === -1 ? photos.length - 1 : slideNumber - 1)}} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src}
            alt="" />
          </div>
          <FontAwesomeIcon className='faIcon right' icon={faCircleArrowRight} onClick={()=>{setSlideNumber(slideNumber + 1 === photos.length ? 0 : slideNumber + 1)}} />
        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHightlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {
            photos.map(({src}, index) => {
              return <div key={index} className="hotelImgWrapper" onClick={()=>{handleOpen(index)}}>
               <img src={src} alt="" className='hotelImg' />
              </div>
            })
          }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of City</h1>
            <p className="hotelDesc">
                  Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                  Street Apartments has accommodations with air conditioning and
                  free WiFi. The units come with hardwood floors and feature a
                  fully equipped kitchenette with a microwave, a flat-screen TV,
                  and a private bathroom with shower and a hairdryer. A fridge is
                  also offered, as well as an electric tea pot and a coffee
                  machine. Popular points of interest near the apartment include
                  Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                  airport is John Paul II International Kraków–Balice, 16.1 km
                  from Tower Street Apartments, and the property offers a paid
                  airport shuttle service.
            </p>
            </div>
            <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
              <button>Reserve or Book Now!</button>
            </div>
        </div>
        </div>
        <MailList />
        <Footer/>
      </div>
    </div>
  );
}
//
export default Hotel
/**
 * rem => 16px
 * 
 */
