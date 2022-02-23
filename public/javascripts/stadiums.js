const main = {
  init: function () {
    $("#btn-save").on("click", () => this.save());
  },

  save: function () {
    const data = {
      name: $("#name").val(),
      location: $("#location").val(),
    };

    $.ajax({
      type: "POST",
      url: "http://localhost:8080/api/v1/stadiums",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
    })
      .done(() => {
        alert("경기장이 등록되었습니다");
        window.location.href = "/";
      })
      .fail((error) => alert(JSON.stringify(error)));
  },
};

main.init();
