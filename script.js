$(document).ready(() => {
    $("td").click(function (event) {
      alert("Tadi ente klik " + $(this).html() + "!");
    });
    $("th").click(function (event) {
      alert("Tadi ente klik " + $(this).html() + "!");
    });
  });