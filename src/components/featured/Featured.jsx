import React from 'react'
import "./Featured.css"
//
const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner.0c811e7a.png"
             alt=""
             className="featuredImg"
             />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner.0c811e7a.png"
             alt=""
             className="featuredImg"
             />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner.0c811e7a.png"
             alt=""
             className="featuredImg"
             />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
