import React from 'react'

function LabResult() {
  return (
    <div className='lab-container'>
        <h6>Lab Result</h6>
        <div className='lab-data'>
          <div>
            <p>Blood Tests</p>
            <img src="/download.svg" alt="download-sign" />
          </div>
          <div>
            <p>CT Scans</p>
            <img src="/download.svg" alt="download-sign" />
          </div>
          <div>
            <p>Radiology Reports</p>
            <img src="/download.svg" alt="download-sign" />
          </div>
          <div>
            <p>X-Rays</p>
            <img src="/download.svg" alt="download-sign" />
          </div>
          <div>
            <p>Urine Test</p>
            <img src="/download.svg" alt="download-sign" />
          </div>
        </div>
    </div>
  )
}

export default LabResult