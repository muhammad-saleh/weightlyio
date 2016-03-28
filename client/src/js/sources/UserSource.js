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
},
  fetchMeta: function () {
    return $.ajax({
        method: "GET",
        url: "http://localhost:3000/user",
        'beforeSend': function(xhr) {
            if (localStorage.getItem('userToken')) {
              xhr.setRequestHeader('Authorization',
                    'Bearer ' + localStorage.getItem('userToken'));
            }
        },
        crossDomain: true
    });
  }
};

export default UserSource;
