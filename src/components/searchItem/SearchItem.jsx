import React from 'react'
import "./SearchItem.css"
//
const SearchItem = () => {
  const handleSearch = () => {
        navigate("/hotels/0");
    }
  return (
    <div className="searchItem">
        <img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner.0c811e7a.png"
          className='siImg'
          alt="" />
        <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={()=>{handleSearch()}}>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
