const checkAuth = (url) => {
  $.ajax({
    type: "GET",
    url: url,
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.setRequestHeader(
        "Authorization",
        "Bearer " + localStorage.getItem("accessToken")
      );
    },
    datatype: "json",
    success: function (result) {
      if (result.redirect) {
        location.href = result.redirect;
      }
    },
  });
};

export default checkAuth;
