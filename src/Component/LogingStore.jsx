import { create } from 'zustand';
const useLogingStore = create((set) => ({
    logingList: [],
    email: '',
    setUsername: (username) => set({ username }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    fetchLoginList: async (username, password) => {
        try {
            const response = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const data = await response.json();
            sessionStorage.setItem('authToken', data.token);
            console.log(data);
        } catch (error) {
            console.error('Error fetching login list:', error);
        }
    }
}));

export default useLogingStore;
