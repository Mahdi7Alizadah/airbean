import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import useOrderStore from './Zustand';
import Status from './Status'; // Importera Status-komponenten

function BagButton() {
  const [showPopScreen, setShowPopScreen] = useState(false);
  const { orders } = useOrderStore();
  const [orderDetails, setOrderDetails] = useState([]); 
  const [orderNumbers, setOrderNumbers] = useState([]); // Tillstånd för att lagra beställningsnumren

  const handleButtonClick = () => {
    setShowPopScreen(!showPopScreen);
  };

  const increaseQuantity = (index) => {
    const updatedOrderDetails = [...orderDetails];
    updatedOrderDetails[index].quantity += 1;
    setOrderDetails(updatedOrderDetails);
  };

  const decreaseQuantity = (index) => {
    const updatedOrderDetails = [...orderDetails];
    updatedOrderDetails[index].quantity -= 1;
    if (updatedOrderDetails[index].quantity < 0) {
      updatedOrderDetails[index].quantity = 0;
    }
    setOrderDetails(updatedOrderDetails);
  };

  useEffect(() => {
    const aggregatedOrders = orders.reduce((acc, curr) => {
      const existingOrder = acc.find(order => order.id === curr.id);
      if (existingOrder) {
        existingOrder.quantity += curr.quantity;
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
    setOrderDetails(aggregatedOrders);
  }, [orders]);

  const total = orderDetails.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  const handleTakeMyMoney = () => {
    if (orderDetails.length === 0) {
      console.error('Du måste lägga till minst en produkt innan du checkar ut.');
      return;
    }
  
    fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ details: { order: orderDetails } })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Svar från API:', data);
      if (data && data.orderNr) {
        const orderNumber = data.orderNr;
        setOrderNumbers([orderNumber]); 
        setShowPopScreen(false);
        ReactDOM.createPortal(
          <Status orderNumbers={orderNumbers} />,
          document.body
        );
      } else {
        console.error('Inga beställningar tillgängliga.');
      }
    })
    .catch(error => {
      console.error('Fel:', error.message);
    });
  };

  return (
    <div className="bag-button-container">
      <button className="bag-button" onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faShoppingBag} className="icon" />
      </button>
      {showPopScreen && (
        <div className="pop-screen">
          <h2>Din beställning</h2>
          <ul>
            {orderDetails.map((detail, index) => (
              <li key={index}>
                <div className="item-container">
                  <div className="name-price-container">
                    <div>{detail.name}</div>
                    <div>Pris: {detail.price} kr</div>
                  </div>
                  <div className="quantity-container">
                    <FontAwesomeIcon icon={faAngleUp} onClick={() => increaseQuantity(index)} />
                    <div className="quantity">{detail.quantity}</div>
                    <FontAwesomeIcon icon={faAngleDown} onClick={() => decreaseQuantity(index)} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-container">
            <div>
              <h2>Total</h2>
              <h6>Inkl. moms + drönarleverans</h6>
            </div>
            <div>{total} kr</div>
          </div>
          <button className="btn-take" onClick={handleTakeMyMoney}>Take my money</button>
        </div>
      )}
    </div>
  );
}

export default BagButton;
