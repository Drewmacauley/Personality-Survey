$(document).ready(function () {
  $("form#personality_survey_1").submit(function (event) {
    event.preventDefault();
    $("#stress-response").show();
    $("input:checkbox[name=work-stress]:checked").each(function () {
      const workstressSympt = $(this).val();
      $('#stress-response').append( + "<br>");
    });
    $("#personality_survey_2").show();
    $("input:checkbox[name= -]:checked").each(function () {
      const genstress = $(this).val();
      $('#personality-survey').append( + "<br>");
    });
    $('#personality-survey').hide();
  });
});