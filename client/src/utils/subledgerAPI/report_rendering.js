import axios from "axios";

const URL = "https://api.subledger.com:443/v2/orgs/jEepoHL4QntxQ2lTJiKOYE/books";

export default {
    createReport(id){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/reports";
        return axios.post(URL+parameter);
    },
    getReports(id){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/reports";
        return axios.get(URL+parameter);
    },
    getOneReport(id,reportsId){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/reports/" +reportsId;
        return axios.get(URL+parameter);
    },
    attachCategoryToReport(id,reportsId){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/reports/" +reportsId + "/attach";
        return axios.post(URL+parameter);
    },
    detachCategoryToReport(id,reportsId){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/reports/" +reportsId + "/detach";
        return axios.post(URL+parameter);
    },
    renderReport(id,reportsId){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/reports/" +reportsId + "/render";
        return axios.post(URL+parameter);
    },
    archiveReport(id,reportsId){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/reports/" +reportsId + "/archive";
        return axios.post(URL+parameter);
    },
    activateReport(id,reportsId){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/reports/" +reportsId + "/activate";
        return axios.post(URL+parameter);
    }
};