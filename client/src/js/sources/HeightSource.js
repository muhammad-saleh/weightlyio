const HeightSource = {
  post: function (data) {
    return $.ajax({
        method: "POST",
        url: "http://localhost:3000/height",
        data: { height: data.height },
        xhrFields: { withCredentials: true },
        crossDomain: true
    })
  }
};

export default HeightSource;
