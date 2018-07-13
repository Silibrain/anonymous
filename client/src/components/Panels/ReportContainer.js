
import React from "react";
/**
 * Connect to QBO Button
 * @param props
 * @returns {XML}
 */
const ReportContainer = props => {
  const { callbackURL } = props;

  const QBLogin = () => {
    // we wrap QBO's button in a template string
    // becuase it has some stuff that isn't supported by JSX and react
    // like xml name spaces
    const template = `
        <script type="text/javascript" src="https://appcenter.intuit.com/Content/IA/intuit.ipp.anywhere.js"></script>
         <script>
         intuit.ipp.anywhere.setup({
           menuProxy: '',
           grantUrl: '${callbackURL}'
           });
         </script>
         <ipp:connectToIntuit></ipp:connectToIntuit>`;

    // then we return it in a format ready for dansgeouslySetInnerHTML
    return {
      __html: template
    };
  };

  return <div dangerouslySetInnerHTML={QBLogin()} />;
};

//validate props
ConnectToQBooksBtn.propTypes = {
  callbackURL: PropTypes.string.isRequired
};

export default ReportContainer;