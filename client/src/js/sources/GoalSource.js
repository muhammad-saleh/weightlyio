const HeightSource = {
  post: function (data) {
    return $.ajax({
        method: "POST",
        url: "http://localhost:3000/goal",
        data: { goal: data.goal },
        xhrFields: { withCredentials: true },
        crossDomain: true
    })
  }
};

export default HeightSource;
