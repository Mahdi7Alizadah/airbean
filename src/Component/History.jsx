import React, { useEffect } from 'react';
import useHistoryStore from './HistoryStore';
import avatar from '../image/avatar.svg';
import useUser from './Loging';
import '../style/history.css'

export default function MyHistory() {
  // const { historyList, fetchHistoryList } = useHistoryStore();
  // const { username, email, isLoggedIn } = useUser(); 

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     fetchHistoryList();
  //   }
  // }, [isLoggedIn]);

  // return isLoggedIn ? (
  //   <div className='container'>
  //     <img src={avatar} alt="avatar" />
  //     <p>Username: {username}</p>
  //     <p>Email: {email}</p>
  //     <h2>My History</h2>
  //   </div>
  // ) : null;

  const orders = [
    {
      number: '#AB1123282323Z',
      date: '20/03/06',
      total: 443,
    },
    {
      number: '#AB1128382323X',
      date: '20/03/03',
      total: 333,
    },
    {
      number: '#AB1444482323X',
      date: '20/02/21',
      total: 893,
    },
  ];
  
  const totalSpent = orders.reduce((acc, order) => acc + order.total, 0);
    return (
      <div className="contir">
        <header>
        <img className='avatar'src={avatar} alt="avatar" />
          <h2>Sixten Kaffelövér</h2>
          <p>sixten.kaffelover@zocom.se</p>
        </header>
        <main>
          <section className="order-history">
            <h2>Orderhistorik</h2>
              {orders.map((order) => (
            <ul>
                <li key={order.number}>
                  <span className="order-number">{order.number}</span>
                  <span className="order-date">{order.date}</span>
                </li>
                <li> 
                  <span className="order-text">total ordersumma</span>
                  <span className="order-total">{order.total} kr</span>
                </li>
            </ul>
              ))}
              <ul>
                <li>
                  <span className="total-spent">Totalt spenderat:</span>
                  <span className="total-spent"> {totalSpent} kr</span>
                </li>
              </ul>
          </section>
        </main>
      </div>
    );
  }

