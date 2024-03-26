import {create} from 'zustand';

const useCoffeeStore = create((set) => ({
    coffeeList: [],
    fetchCoffeeList: async () => {
      try {
        const response = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans');
        const data = await response.json();
        const menu = data.menu; 
        console.log('Menu:', menu); 
        set({ coffeeList: menu });
      } catch (error) {
        console.error('Error fetching coffee list:', error);
      }
    },
  }));
  export default useCoffeeStore;