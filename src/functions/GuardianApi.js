import axios from "axios";
import inputProcess from "./InputProcess"

export default (data, currentPage) => {
    if (data.length === 0 && currentPage === 0) {
        //return axios.get(`https://content.guardianapis.com/search?api-key=cc56c111-e5a6-4922-92b8-181826199202&format=json&show-fields=all&order-by=newest&page-size=15`);
        return axios.get(`https://content.guardianapis.com/search?api-key=cc56c111-e5a6-4922-92b8-181826199202&format=json&show-fields=standfirst,thumbnail,short-url&order-by=newest&page-size=15`);
    }
    let processedData = inputProcess(data);
    return axios.get(`https://content.guardianapis.com/search?page=${currentPage}&q=${processedData}&api-key=cc56c111-e5a6-4922-92b8-181826199202&format=json&show-fields=all&order-by=newest&page-size=15`);
}