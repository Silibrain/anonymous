import axios from "axios";

const URL = "https://api.subledger.com:443/v2/orgs/jEepoHL4QntxQ2lTJiKOYE/books";

export default {
    createAccount(bookId){
        const parameter = "/" + bookId +"/accounts";
        return axios.post(URL+parameter);
    },
    getOneAccount(bookId, accountId){
        const parameter = "/" + bookId +"/accounts/" + accountId;
        return axios.get(URL+parameter);
    },
    getAccountLines(bookId, accountId){
        const parameter = "/" + bookId +"/accounts/" + accountId + "/lines";
        return axios.get(URL+parameter);
    },
    archiveAccount(bookId, accountId){
        const parameter = "/" + bookId +"/accounts/" + accountId + "/archive";
        return axios.post(URL+parameter);
    },
    activateAccount(bookId, accountId){
        const parameter = "/" + bookId +"/accounts/" + accountId + "/activate";
        return axios.post(URL+parameter);
    },
    getAccountBalance(bookId, accountId){
        const parameter = "/" + bookId +"/accounts/" + accountId + "/balance";
        return axios.get(URL+parameter);
    },
    getAccountFirstLastLines(bookId, accountId){
        const parameter = "/" + bookId +"/accounts/" + accountId + "/first_and_last_line";
        return axios.get(URL+parameter);
    }
};