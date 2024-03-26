import React, { useState, useEffect } from 'react';
import drone from '../image/drone.svg';
import '../style/status.css'

function Status({ orderNumbers }) {

  // const [orderStatus, setOrderStatus] = useState(null);

  // useEffect(() => {
  //   const fetchOrderDetails = async () => {
  //     if (!Array.isArray(orderNumbers) || orderNumbers.length === 0) {
  //       console.log("Inga ordernummer tillgängliga.");
  //       return;
  //     }

  //     console.log("Order numbers:", orderNumbers);

  //     const promises = orderNumbers.map(orderNr => {
  //       return fetch(`https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/${orderNr}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //       })
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Något gick fel vid hämtning av beställningsdetaljer');
  //         }
  //         return response.json();
  //       })
  //       .catch(error => {
  //         console.error('Fel:', error.message);
  //         return null;
  //       });
  //     });

  //     Promise.all(promises)
  //       .then(orderStatuses => {
  //         console.log("Order statuses:", orderStatuses);
  //         if (orderStatuses.length > 0) {
  //           setOrderStatus(orderStatuses[0]);
  //         } else {
  //           console.error("Ingen beställningsstatus tillgänglig.");
  //         }
  //       });
  //   };

  //   fetchOrderDetails();
  // }, [orderNumbers]);

  return (
    <>
      {/*orderStatus && */(
      <div className="conti">
        <div className='status-container'>
            <div>Beställningsnummer: #12DV23F {/*<span className='orderNr'>orderNumbers.join(', ')</span>*/}</div> 
            <img src={drone} alt="drone" />
            <h2>Din beställning är på väg!</h2>
            <div>{/*<h2>orderStatus.eta</h2>*/}13 minuter</div>
            <button className='btn-istatus'>Ok, cool!</button>
        </div>
      </div>
      )}
    </>
  );
}

export default Status;
