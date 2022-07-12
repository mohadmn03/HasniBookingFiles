import React from 'react'
import "./SearchItem.css"
//
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://scontent.faae2-2.fna.fbcdn.net/v/t1.6435-9/94316912_3274882392530407_8307226878071013376_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFR4NbpZ3LL3HJhE3giykF6BHMSaa-pWtcEcxJpr6la1y8yriRgd7YjD23jfOzdYN456-Tumij5ovElC1AD1uv5&_nc_ohc=gE4DwHNbpZAAX9TaETk&_nc_ht=scontent.faae2-2.fna&oh=00_AT-D8j2A_BRbR1TTra8zm-7ApsemQFJC29uhI6tTbown6A&oe=62E6B87B"
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
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem