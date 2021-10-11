import axios from "axios";

export default () => {
        return axios.get(`https://content.guardianapis.com/search?api-key=cc56c111-e5a6-4922-92b8-181826199202&sections`);  
}