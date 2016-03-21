const UserSource = {
  fetch: function () {
    return $.ajax({
        method: "POST",
        url: "https://msaleh.auth0.com/tokeninfo",
        data: {
            "id_token": localStorage.getItem('userToken')
        },
        crossDomain: true
    });
  }
};

export default UserSource;
