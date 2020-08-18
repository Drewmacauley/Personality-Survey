$(document).ready(function () {
  $("form#personality_survey_1").submit(function (event) {
    event.preventDefault();
    $("#personality").show();
    $("input:checkbox[name=work-stress]:checked").each(function () {
      const workStress = $(this).val();
      $('#personality').append(workStress + "<br>");
    });
    $("#high-stress").show();
    $("input:checkbox[name=high-stress]:checked").each(function () {
      const highStress = $(this).val();
      $('#high-stress').append(highStress + "<br>");
    });
  });
});