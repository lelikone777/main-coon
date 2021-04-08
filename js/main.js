$(document).ready(function () {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    pagination: ".pag-shoes",
    paginationClickable: true,
    paginationType: "custom",
    paginationCustomRender: function (swiper, current, total) {
      var names = [];
      $(".swiper-wrapper .swiper-slide").each(function (i) {
        names.push($(this).data("name"));
      });
      var text = "<span style='background-color:black;padding:20px;'>";
      for (let i = 1; i <= total; i++) {
        if (current == i) {
          text +=
            "<span style='border-top:1px solid green;margin-right:4px;color:green;padding:10px;'>" +
            names[i] +
            "</span>";
        } else {
          text +=
            "<span style='border-top:1px solid white;margin-right:4px;color:white;padding:10px;'>" +
            names[i] +
            "</span>";
        }
      }
      text += "</span>";
      return text;
    },
  });
});