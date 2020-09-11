function overflowHeight() {
  var minHeight = 164;
  $(".collapsible-content").each(function() {
    var $item = $(this);
    var $content = $item.find("> .content");
    if ($content.height() > minHeight || $content[0].scrollHeight > minHeight) {
      $item.addClass("collapse");
    }
    else {
      $item.removeClass("collapse");
    }
  });
}

$(window).on("resize", overflowHeight);
overflowHeight();

$(".collapsible-container").on("click", ".collapsible-content > .toggle-collapse", function() {
  var $item = $(this).closest(".collapsible-content");
  var $container = $item.closest(".collapsible-container");
  var scrollTop = $(window).scrollTop();
  var offsetTop = $item.offset().top;

  if ($container.hasClass("expand")) {
    $container.removeClass("expand");
    var newOffsetTop = $item.offset().top;
    var newPos1 = newOffsetTop - (offsetTop - scrollTop); // Maintains based on top position
    var newPos2 = newOffsetTop + $item.height() - 60; // Keeps at least bottom 60px of item in view
    
    if (newPos1 > newPos2) {
      // As long as view more link would still be visible after collapse
      $(window).scrollTop(newPos2);
    }
    else {
      $(window).scrollTop(newPos1);
    }
  }
  else {
    $container.addClass("expand");
    $(window).scrollTop(scrollTop + ($item.offset().top - offsetTop));
  }
});