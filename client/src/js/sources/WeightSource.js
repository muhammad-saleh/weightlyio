const WeightSource = {
  fetch: function () {
    return $.ajax({
        method: "GET",
        url: "http://localhost:3000/weight",
        'beforeSend': function(xhr) {
            if (localStorage.getItem('userToken')) {
              xhr.setRequestHeader('Authorization',
                    'Bearer ' + localStorage.getItem('userToken'));
            }
        },
        crossDomain: true
    })
    },
  post: function (data) {
    return $.ajax({
        method: "POST",
        url: "http://localhost:3000/weight",
        data: { weight: data.weight, date: data.date, feel:""},
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

export default WeightSource;
