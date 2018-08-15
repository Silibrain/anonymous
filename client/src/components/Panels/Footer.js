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
      Copyright &copy; {new Date().getFullYear()} Roberto Baldizon, Alexandra
      Goodwin, et al.
      <br />
      <MailchimpSubscribe url={url} />
    </footer>
  );
};
