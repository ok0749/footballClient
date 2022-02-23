const ajax = async (type, url, data) => {
  await $.ajax({
    type,
    url,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
  });
};

const main = {
  init: function () {
    $("#btn-save").on("click", () => this.save());
  },

  save: async function () {
    const data = {
      name: $("#name").val(),
      location: $("#location").val(),
    };

    try {
      await ajax("POST", "http://localhost:8080/api/v1/stadiums", data);
      alert("경기장이 등록되었습니다.");
      window.location.href = "/";
    } catch (error) {
      alert(JSON.stringify(error));
    }
  },
};

main.init();
