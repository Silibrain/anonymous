import axios from "axios";

export default {
  getStatus: function(t) {
    axios
      .get("/isloggedin")
      .then(response => {
        // console.log("%%%%%%",response);
        // console.log("$$$$", response.data.status);
        t.setState({
          status: response.data.status
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getUserId: function(t) {
    axios.get("/user/id").then(userId => {
      console.log("userid", userId);
      t.setState({
        currentUser: userId.data
      });
    });
  },

  getAccountData: function(t) {
    axios
      .get("/user/account")
      .then(response => {
        if (response.data.location) {
          var userObj = t.state.user;
          userObj.email = response.data.email;
          userObj.name = response.data.name;
          userObj.phone = response.data.phone;
          userObj.title = response.data.title;
          userObj.bio = response.data.bio;
          userObj.role = response.data.role;

          t.setState({
            loadingAccount: false,
            loadingLocation: false,
            user: userObj
          });

          if (!t.state.loadingAccount && !t.state.loadingLocation) {
            t.setState({
              loading: false
            });
          }
        } else {
          let userObj = t.state.user;
          userObj.email = response.data.email;
          userObj.name = response.data.name;
          userObj.phone = response.data.number;
          userObj.title = response.data.favorite;
          userObj.bio = response.data.bio;
          userObj.role = response.data.role;
          t.setState({
            loadingAccount: false,
            user: userObj
          });
          if (!t.state.loadingAccount && !t.state.loadingLocation) {
            t.setState({
              loading: false
            });
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  updateAccountData: function(t) {
    const userData = t.state.user;
    axios
      .put("/user/update", userData, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        if (response) this.getAccountData(t);
        alert("account updated");
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  logout: function() {
    axios.get("/logout").then(function(res) {
      // console.log(res);
      if (res.data) {
        //window.location.reload();
        window.location.href = "/";
      }
    });
  }
};