import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./style.css";
// eslint-disable-next-line
const url =
  "https://herokuapp.us19.list-manage.com/subscribe/post?u=624fb67aab9ed89ad196e5e76&amp;id=473c367f47";

export default () => {
  return (
    // <footer className="bg-dark text-white mt-5 p-4 text-center">
    <footer>
      <div className="container" align="center">
        <div className="row">
          {/* <div className="col">
            <a className="footer-brand" href="/">
              <img src="./logo.png" alt="" width="300px" />
            </a>
          </div> */}
          <div className="col">
            <br />
            <br />
            <p>
              <MailchimpSubscribe url={url} />
            </p>
            <p>
              Copyright &copy; {new Date().getFullYear()} Roberto Baldizon,
              Alexandra Goodwin, et al.
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
};
