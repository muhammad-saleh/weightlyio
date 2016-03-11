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
  }
};

export default WeightSource;
