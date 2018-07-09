import axios from "axios";

const URL = "https://api.subledger.com:443/v2/orgs/jEepoHL4QntxQ2lTJiKOYE/books";

export default {
    createCategory(bookId){
        const parameter = "/" + bookId +"/categories";
        return axios.post(URL+parameter);
    },
    getOneCategory(bookId, categoryId){
        const parameter = "/" + bookId +"/categories/" + categoryId;
        return axios.get(URL+parameter);
    },
    attachAccountToCategory(bookId, accountId){
        const parameter = "/" + bookId +"/categories/" + accountId + "/attach";
        return axios.post(URL+parameter);
    },
    detachAccountToCategory(bookId, accountId){
        const parameter = "/" + bookId +"/categories/" + accountId + "/detach";
        return axios.post(URL+parameter);
    },
    archiveCategory(bookId, accountId){
        const parameter = "/" + bookId +"/categories/" + accountId + "/archive";
        return axios.post(URL+parameter);
    },
    activateCategory(bookId, accountId){
        const parameter = "/" + bookId +"/categories/" + accountId + "/activate";
        return axios.post(URL+parameter);
    }
};