import React from 'react'

function Sidebar() {
  return (
    <div className='side-container'>
        <div className='side-container1'>
            <h2>Patients</h2>
            <img src="/search.png" alt="search" />
        </div>
        <div className='patient-list'>
            <div>
                <img src="/Layer 8.png" alt="img1" />
                <p>Emily Willams<span id="my-span">Female,18</span></p>
                <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                <img src="/Layer 1.png" alt="img1" />
                <p>Ryan Johnson<span id="my-span">Male, 45</span></p>
                <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                <img src="/Layer 3.png" alt="img1" />
                <p>Brandon Mitchell<span id="my-span">Male,36</span></p>
                <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                <img src="/Layer 2.png" alt="img1" />
            <p>Jessica Taylor<span id="my-span">Female,28</span></p>
            <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                 <img src="/Layer 8.png" alt="img1" />
            <p>Samantha Johnson<span id="my-span">Female,38</span></p>
            <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                <img src="/Layer 12.png" alt="img1" />
                <p>Ashly Martinez<span id="my-span">Female,54</span></p>
                <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                <img src="/Layer 9.png" alt="img1" />
                 <p>Tylor Davis <span id="my-span">Male,19</span></p>
                 <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                 <img src="/Layer 4.png" alt="img1" />
                 <p>Kevin Anderson<span id="my-span">Male,30</span></p>
                 <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                <img src="/Layer 12.png" alt="img1" />
                <p>Ashly Martinez<span id="my-span">Female,54</span></p>
                <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
            <div>
                <img src="/Layer 3.png" alt="img1" />
                <p>Brandon Mitchell<span id="my-span">Male,36</span></p>
                <img className = "three-dot" src="/three dot.png" alt="" />
            </div>
   
        </div>
        
    </div>
  )
}

export default Sidebar