import React, { useEffect } from 'react';
import useCoffeeStore from './MenyStore';
import useOrderStore from './Zustand';
import "../style/meny.css";

export default function CoffeeComponent() {
  const { coffeeList, fetchCoffeeList } = useCoffeeStore();
  const { addOrder } = useOrderStore(); 

  useEffect(() => {
    fetchCoffeeList();
  }, []);

  const handleAddToOrder = (coffee) => {
    const orderDetails = {
      id: coffee.id,
      eta: coffee.eta,
      orderNr: coffee.orderNr,
      name: coffee.title,
      price: coffee.price,
      quantity: 1
    };
    addOrder(orderDetails);
  };

  return (
    <div className="cont">
    <div className="coffee-list">
      <h1>Meny</h1>
      {Array.isArray(coffeeList) && coffeeList.map(coffee => (
        <div className="coffee-info" key={coffee.id}>
          <div className="left">
            <button className='plus-btn' onClick={() => handleAddToOrder(coffee)}>+</button>
          </div>
          <div className="center">
            <h2>{coffee.title}</h2>
            <p>{coffee.desc}</p>
          </div>
          <div className="right">
            <p>Price: {coffee.price} kr</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
