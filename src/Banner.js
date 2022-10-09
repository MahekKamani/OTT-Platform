import React from 'react'
import './Banner.css'

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n-1) + '...' : string;
    }

  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner-content">
            <h1 className='banner-title'>Movie Name</h1>
            <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h1 className='banner-discription'>{truncate(`This is a test discription This is a test discription This is a test discription This is a test discription This is a test discription This is a test discription This is a test discription This is a test discription This is a test discription This is a test discription`,150)}</h1>
        </div>
        <div className='banner-fadeButton'/>
    </header>
  )
}

export default Banner