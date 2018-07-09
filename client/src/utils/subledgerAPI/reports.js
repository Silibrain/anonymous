import axios from "axios";

const URL = "https://api.subledger.com:443/v2/orgs/jEepoHL4QntxQ2lTJiKOYE/books";

export default {
    getReports(id, reportId){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/report_renderings/" + reportId;
        return axios.get(URL+parameter);
    }
};