$(document).ready(function () {
  $("form#personality_survey_1").submit(function (event) {
    event.preventDefault();
    $("#signs-response").show();
    $("input:checkbox[name=work-stress]:checked").each(function () {
      const workstressSympt = $(this).val();
      $('#stress-response').append( + "<br>");
    });
    $("#personality_survey_2").show();
    $("input:checkbox[name=high-stress]:checked").each(function () {
      const genstress = $(this).val();
      $('#personality-response').append( + "<br>");
    });
    $('#personality-survey').hide();
  });
});