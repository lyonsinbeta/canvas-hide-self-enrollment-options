/*
 * canvas-hide-self-enrollment-options.js
 * by: David Lyons hi@lyonsinbeta.com
 * Hides self-enrollment options from any
 * user who is not an admin
 */

$(function() {
  if (window.location.pathname == "/courses/" + ENV.COURSE_ID + "/settings") {
    if($.inArray("admin", ENV.current_user_roles) == -1) {
        $("#course_self_enrollment").hide();
        $("label[for='course_self_enrollment']").hide();
        $(".open_enrollment_holder").hide();
    }
  }
});
