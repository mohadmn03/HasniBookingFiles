import React from 'react'
import "./Featured.css"
//
const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://scontent.faae2-1.fna.fbcdn.net/v/t1.18169-9/12803298_1240049166023992_9095875866449123143_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeH7fd8I0CUE3zVBEEwx6_Bv3wnYj8uo6ArfCdiPy6joCnrCCMXrftan1Q_ikMwo2AolGVjGzG-YTkgirRmr9MtK&_nc_ohc=DWggf6HaxM8AX8pJ81e&_nc_ht=scontent.faae2-1.fna&oh=00_AT8Ol0RWeYpbYlBxhPNDMJXTFvUR7mCSxhKVJUGlRZnOmg&oe=62DF7C74"
             alt=""
             className="featuredImg"
             />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://scontent.faae2-1.fna.fbcdn.net/v/t1.18169-9/12803298_1240049166023992_9095875866449123143_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeH7fd8I0CUE3zVBEEwx6_Bv3wnYj8uo6ArfCdiPy6joCnrCCMXrftan1Q_ikMwo2AolGVjGzG-YTkgirRmr9MtK&_nc_ohc=DWggf6HaxM8AX8pJ81e&_nc_ht=scontent.faae2-1.fna&oh=00_AT8Ol0RWeYpbYlBxhPNDMJXTFvUR7mCSxhKVJUGlRZnOmg&oe=62DF7C74"
             alt=""
             className="featuredImg"
             />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://scontent.faae2-1.fna.fbcdn.net/v/t1.18169-9/12803298_1240049166023992_9095875866449123143_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeH7fd8I0CUE3zVBEEwx6_Bv3wnYj8uo6ArfCdiPy6joCnrCCMXrftan1Q_ikMwo2AolGVjGzG-YTkgirRmr9MtK&_nc_ohc=DWggf6HaxM8AX8pJ81e&_nc_ht=scontent.faae2-1.fna&oh=00_AT8Ol0RWeYpbYlBxhPNDMJXTFvUR7mCSxhKVJUGlRZnOmg&oe=62DF7C74"
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