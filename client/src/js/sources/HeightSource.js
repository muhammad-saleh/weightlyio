import Constants from '../constants/constants';

const HeightSource = {
  post: function (data) {
    return $.ajax({
        method: "POST",
        url: Constants["SERVER_URL"] + "/height",
        data: { height: data.height },
        'beforeSend': function(xhr) {
            if (localStorage.getItem('userToken')) {
              xhr.setRequestHeader('Authorization',
                    'Bearer ' + localStorage.getItem('userToken'));
            }
        },
        crossDomain: true
    })
  }
};

export default HeightSource;
