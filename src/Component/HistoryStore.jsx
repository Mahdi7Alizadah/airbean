import {create} from 'zustand';
const useHistoryStore = create(() =>({
historyList:[],
fetchHistoryList: async()=>{
    try {
        const resp = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/user/history',{
            method: 'GET',
            headers: {
                "accept": "application/json",
              },
        });

        const data = await resp.json();
        console.log(data)
    } catch (error) {
        console.error('Error fetching login list:', error);
    }
}
}));

export default useHistoryStore;