import React from "react";

const MyButton = props => {
  const { clientId, redirectUri, antiForgeryStateToken } = props;
  return (
    <a
      href={`https://appcenter.intuit.com/connect/oauth2?client_id=${Q0MfnsoLtO8uTJrebSQhPQ2whltUw4wdMbvCeV1sylKZWoCT7h}&redirect_uri=${redirectUri}&scope=com.intuit.quickbooks.accounting%20com.intuit.quickbooks.payments&response_type=code&state=${antiForgeryStateToken}`}
    >
      <img src="/yourButtonImage.jpg" />
    </a>
  );
};

export default MyButton;
