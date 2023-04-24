import React from 'react'
import burger from "../images/burger.jpg"

const Project = () => {
  return (
    <div>
      
      <div className='proj-grid'>
        <div className='grid-item' > <img src="/images/sweet_desk.png" style={{height: "400px", width:"350px"}} alt="" /> </div>
        <div className='grid-item'> <img src={burger} style={{height: "400px", width:"350px"}} alt="" /> </div>
        <div className='grid-item'> <img src="/images/secret-unfolds.gif" style={{height: "400px", width:"350px"}} alt="" /> </div>
        <div className='grid-item'> <img src="/images/playlist.png" style={{height: "400px", width:"350px"}} alt="" /> </div>
        <div className='grid-item'> <img src="/images/c2e.png" style={{height: "400px", width:"350px"}} alt="" /> </div>
        <div className='grid-item'> <img src="/images/foe.png" style={{height: "400px", width:"350px"}} alt="" /> </div>

        {/* <div className='grid-item'>1</div>
        <div className='grid-item'>2</div>
        <div className='grid-item'>3</div>
        <div className='grid-item'>4</div>
        <div className='grid-item'>5</div>
        <div className='grid-item'>5</div> */}


      </div>
    </div>
  )
}

export default Project