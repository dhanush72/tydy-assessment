// load data from json file
function loadData() {
  $.ajax({
    type: "GET",
    url: "data.json",
    success: function (data) {
      // retrieve template from html doc
      var source = $("#users-data").html();
      var template = Handlebars.compile(source);

      var data = template(data);

      // insert data into html
      $("#load-data").html(data);
      // DataTable
      $("table").DataTable({
        "lengthMenu": [
          [10, 25, 50, 500, -1],
          [10, 25, 50, 500, "All"],
        ],
      });
    },
  });
}

$(document).ready(function () {
  loadData();
});
