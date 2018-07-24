import React, {
  Component
} from "react";
// import API from "../../utils/API"
import Wrapper from "../../components/Wrapper/Wrapper";
import BSBtn from "../../components/BSBtn/BSBtn";
import ISBtn from "../../components/ISBtn/ISBtn";
import CSBtn from "../../components/CSBtn/CSBtn";

import accounts from "../../utils/subLedgeAPI/accounts";
import books from "../../utils/subledgerAPI/books";
import categoriess from "../../utils/subledgerAPI/categories";
import identities from "../../utils/subledgerAPI/identities";
import journal_entries from "../../utils/subLedgeAPI/journal_entries";
import orgs from "../../utils/subLedgeAPI/orgs";
import report_rendering from "../../utils/subLedgeAPI/report_rendering";
import reports from "../../utils/subLedgeAPI/reports";

class ReportsMenu extends Component {
  state = {
    item: {
      id: accountId
    },
    results: {},
    show: false,
    error: ""
  };

  state = {
    labels: [{
      id: "bookId",
      val: ""
    }, {
      id: "accountId",
      val: ""
    }],
    results: {},
    show: false,
    error: ""
  };
}

class ReportsMenu extends Component {
  state = {
    item: {
      id: booksId
    },
    results: {},
    show: false,
    error: ""
  };

  state = {
    labels: [{
        id: "",
        val: ""
      } // Fill in id name for all books
    ],
    resutls: {},
    show: false,
    error: ""
  };
}

class ReportsMenu extends Component {
  state = {
    item: {
      id: categoriesId
    },
    results: {},
    show: false,
    error: ""
  };

  state = {
    labels: [{
        id: "booksId",
        val: ""
      },
      {
        id: "categoriesId",
        val: ""
      } // Fill in id name for all books
    ],
    resutls: {},
    show: false,
    error: ""
  };
}

class ReportsMenu extends Component {
  state = {
    item: {
      id: journal_entriesId
    },
    results: {},
    show: false,
    error: ""
  };

  state = {
    labels: [{
        id: "booksId",
        val: ""
      },
      {
        id: "journal_entriesId",
        val: ""
      } // Fill in id name for all books
    ],
    resutls: {},
    show: false,
    error: ""
  };
}

class ReportsMenu extends Component {
  state = {
    item: {
      id: orgsId
    },
    results: {},
    show: false,
    error: ""
  };

  state = {
    labels: [{
        id: "booksId",
        val: ""
      },
      {
        id: "orgs",
        val: ""
      } // VERIFY THE PROPER ID NAMES FOR ORGS
    ],
    resutls: {},
    show: false,
    error: ""
  };

  render() {
    return <Wrapper / > ;
  }

}

export default ReportsMenu;