import React, { useEffect, useState } from 'react';
import patient from './data';

function SideBarRight() {
  const [jessica, setJessica] = useState(); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await patient; 
        const jessicaData = data.find(person => person.name === 'Jessica Taylor'); 
        setJessica(jessicaData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!jessica) {
    return <div>Loading...</div>; // Handle loading state
  }

 

  return (
    <div className="sideRight-container">
      <div className="patient-info">
        <div id="right-container1">
          <img src={jessica.profile_picture} alt="Profile" />
          <h2>{jessica.name}</h2>
        </div>

        <div>
          <img src="/BirthIcon.png" alt="Birth Icon" />
          <p>
            Date Of Birth <span>{jessica.date_of_birth}</span>
          </p>
        </div>

        <div>
          <img src="/FemaleIcon.png" alt="Gender Icon" />
          <p>
            Gender <span>{jessica.gender}</span>
          </p>
        </div>

        <div>
          <img src="/PhoneIcon.png" alt="Phone Icon" />
          <p>
            Contact <span>{jessica.phone_number}</span>
          </p>
        </div>

        <div>
          <img src="/PhoneIcon.png" alt="Emergency Contact Icon" />
          <p>
            Emergency Contacts <span>{jessica.emergency_contact}</span>
          </p>
        </div>

        <div>
          <img src="/InsuranceIcon.png" alt="Insurance Icon" />
          <p>
            Insurance Type <span>{jessica.insurance_type}</span>
          </p>
        </div>
        <button>Show All Information</button>
      </div>
    </div>
  );
}

export default SideBarRight;