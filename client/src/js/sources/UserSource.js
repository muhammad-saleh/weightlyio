const UserSource = {
  fetch: function () {
    return $.ajax({
        method: "GET",
        url: "http://localhost:3000/user",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    });
  }
};

export default UserSource;
