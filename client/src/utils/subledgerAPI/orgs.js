import axios from "axios";

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8a157db08bd34988b2104282b0c41690";

export default {
    getArticles(query, firstDate, lastDate){
        const q = "&q=" + query;
        const begin_date = "&begin_date=" + firstDate + "0101";
        const end_date = "&end_date=" + lastDate + "1231";

        let parameters = q;

        if(begin_date && end_date){
            parameters += begin_date + end_date;
        }else if(begin_date){
            parameters += begin_date;
        }else if(end_date){
            parameters += end_date;
        }
        return axios.get(URL+parameters);
    }
};