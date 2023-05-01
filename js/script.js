(function () {
  $(document).ready(function () {
    // event pada saat link diklik
    $(".page-scroll").on("click", function (e) {
      // Ambil href
      let tujuan = $(this).attr("href");
      //   Tangkap elemen yang bersangkutan
      let elemenTujuan = $(tujuan);
      //   Jalankan animasi
      $("html").animate(
        {
          scrollTop: Math.round(elemenTujuan.offset().top) - 50,
        },
        2000,
        "easeInOutBack"
      );
      e.preventDefault();
    });
  });
})();

// Parallax
// About
(function () {
  $(window).on("load", function () {
    // add class
    $(".pLeft").addClass("pMuncul");
    $(".pRight").addClass("pMuncul");
  });
})();

// scroll efect
(function () {
  // Portfolio
  $(window).scroll(function () {
    let wScroll = $(document).scrollTop();
    if (wScroll > $(".portfolio").offset().top - 180) {
      $(".portfolio .card").each(function (i) {
        setTimeout(function () {
          $(".portfolio .card").eq(i).addClass("muncul");
        }, 350 * (i + 1));
      });
    }
  });
})();
