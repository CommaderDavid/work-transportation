// Back end

// Front end
$(document).ready(function() {
  $("form#trans_survey").submit(function(e) {
    e.preventDefault();

    $("#work_result").show();
    $("input:checkbox[name=work-trans]:checked").each(function() {
      var workTransportMode = $(this).val();
      var capitalWorkTransportMode = workTransportMode.toUpperCase();
      $("#work_result").append(capitalWorkTransportMode + "<br>");
    });

    $("#fun_result").show();
    $("input:checkbox[name=fun-trans]:checked").each(function() {
      var funTransportMode = $(this).val();
      var capitalFunTransportMode = funTransportMode.toUpperCase();
      $("#fun_result").append(capitalFunTransportMode + "<br>");
    });

    $("#trans_survey").hide();
  });
});
