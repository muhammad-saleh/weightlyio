import Constants from '../constants/constants';

const GoalSource = {
  post: function (data) {
    return $.ajax({
        method: "POST",
        url: Constants["SERVER_URL"] + "/goal",
        data: { goal: data.goal },
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

export default GoalSource;
