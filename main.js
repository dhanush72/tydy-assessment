function handleData() {}

function loadData() {
  $.ajax({
    type: "GET",
    url: "data.json",
    success: function (data) {
      var source = $("#users-data").html();
      var template = Handlebars.compile(source);

      var data = template(data);
      $("#load-data").html(data);
      $("table").DataTable();
    },
  });
}

$(document).ready(function () {
  loadData();
});
