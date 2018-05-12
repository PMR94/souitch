$(".argument").each(
  function() {
    $("#arguments .argument:gt(0)").hide();
      setInterval(
        function(){
      $("#arguments > :first-child").fadeOut(500, function(){
        $(this).next(".argument").fadeIn(500).end().appendTo("#arguments")
      });
        }, 2000
      );
  }
)
