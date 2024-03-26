import create from 'zustand';

const useOrderStore = create((set) => ({
  orders: [],
  addOrder: (order) => set((state) => {
    const existingOrderIndex = state.orders.findIndex(item => item.id === order.id);
    if (existingOrderIndex !== -1) {
      const updatedOrders = [...state.orders];
      updatedOrders[existingOrderIndex].quantity += order.quantity;
      return { orders: updatedOrders };
    } else {
      return { orders: [...state.orders, order] };
    }
  }),
}));

export default useOrderStore;
