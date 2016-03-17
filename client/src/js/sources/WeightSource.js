const WeightSource = {
  fetch: function () {
    return $.ajax({
        method: "GET",
        url: "http://localhost:3000/weight",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    })
    },
  post: function (data) {
    return $.ajax({
        method: "POST",
        url: "http://localhost:3000/weight",
        data: { weight: data.weight, date: data.date, feel:""},
        xhrFields: { withCredentials: true },
        crossDomain: true
    })
  }
};

export default WeightSource;
