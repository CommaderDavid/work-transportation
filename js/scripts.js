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


    $("#trans_survey").hide();
  });
});
