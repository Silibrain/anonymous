import axios from "axios";

const URL = "https://api.subledger.com:443/v2/orgs/jEepoHL4QntxQ2lTJiKOYE";

export default {
    archiveOrg(){
        const parameter = "/archive";
        return axios.get(URL+parameter);
    },
    activateOrg(){
        const parameter = "/activate";
        return axios.post(URL+parameter);
    }
};