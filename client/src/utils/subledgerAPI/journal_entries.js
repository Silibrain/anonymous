import axios from "axios";

const URL = "https://api.subledger.com:443/v2/orgs/jEepoHL4QntxQ2lTJiKOYE/books";

export default {
    getJournalEntries(id){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/journal_entries";
        return axios.get(URL+parameter);
    },
    createAndPost(id){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/journal_entries/create_and_post";
        return axios.post(URL+parameter);
    },
    accountingPostJournalEntry(id,entryid){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/journal_entries/" + entryid;
        return axios.post(URL+parameter);
    },
    getJournalEntry(id,entryid){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/journal_entries/" + entryid;
        return axios.get(URL+parameter);
    },
    getJournalEntryLines(id,entryid){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/journal_entries/" + entryid + "/lines" ;
        return axios.get(URL+parameter);
    },
    archiveJournalEntry(id,entryid){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/journal_entries/" + entryid + "/archive" ;
        return axios.post(URL+parameter);
    },
    activateJournalEntry(id,entryid){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/journal_entries/" + entryid + "/activate" ;
        return axios.post(URL+parameter);
    },
    journalEntryPosting(id,entryid){
        // const id = HrJZnrIs0kxkhPpLzNqX40;
        const parameter = "/" + id + "/journal_entries/" + entryid + "/progress" ;
        return axios.get(URL+parameter);
    }
};