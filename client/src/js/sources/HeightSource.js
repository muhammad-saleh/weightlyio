const HeightSource = {
  post: function (data) {
    return $.ajax({
        method: "POST",
        url: "http://localhost:3000/height",
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
