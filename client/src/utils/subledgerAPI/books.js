import axios from "axios";

const URL = "https://api.subledger.com:443/v2/orgs/jEepoHL4QntxQ2lTJiKOYE/books";

export default {
    createBook(){
        return axios.post(URL);
    },
    getBooks(){
        const parameter = "/?state=active&action=before&description=Hippocrates%20Health%20App";
        return axios.get(URL+parameter);
    },
    getOneBook(id){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id;
        return axios.get(URL+parameter);
    },
    archiveBook(id){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/archive";
        return axios.post(URL+parameter);
    },
    activateBook(id){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/activate";
        return axios.post(URL+parameter);
    }
};