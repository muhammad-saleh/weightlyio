import Constants from '../constants/constants';

const UserSource = {
  fetch: function () {
    return $.ajax({
        method: "POST",
        url: Constants["AUTH0"],
        data: {
            "id_token": localStorage.getItem('userToken')
        },
        crossDomain: true
    });
},
  fetchMeta: function () {
    return $.ajax({
        method: "GET",
        url: Constants["SERVER_URL"] + "/user",
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
