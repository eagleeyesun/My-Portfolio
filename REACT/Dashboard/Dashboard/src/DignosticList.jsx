import React from 'react'

function DignosticList() {
  return (
    <div className='digno-container'>
        <h5>Dignostic List</h5>
        <div className="digno-nav">
          <h5>Problem/Dignosis</h5>
          <h5>Description</h5>
          <h5>Status</h5>
        </div>

        <div className='digno-container1'>
          <p>Hypertension</p>
          <p>Chronic High Blood Pressure</p>
          <p>Under <span>Observation</span></p>
        </div>

        <div className='digno-container2'>
          <p>Type 2 Diabetes</p>
          <p>Insulin resistance and elevated blood sugar</p>
          <p>Cured</p>
        </div>

        <div className='digno-container3'>
          <p>Asthma</p>
          <p>Recurrnrt episode of bronchial constriction</p>
          <p>Inactive</p>
        </div>
    </div>
  )
}

export default DignosticList