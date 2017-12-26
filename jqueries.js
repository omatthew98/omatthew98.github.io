var signIsOn = false;
$(document).ready(function() {    
    $("#signOff").mouseenter(function() {
        $("#signOn").show();
    })
    
    $("#signOn").mouseenter(function() {
        $("#signOn").show();
    })
    
    $("#signOff").click(
        function(){
            if (signIsOn) {
                signIsOn = false;
            } else {
                signIsOn = true;
            }
        }
    );
    
    $("#signOn").click(
        function(){
            if (signIsOn) {
                signIsOn = false;
            } else {
                signIsOn = true;
            }
        }
    );
    
    $("#signOff").mouseleave(function() {
        if(!signIsOn) {
            $("#signOn").hide();
        }
    })
    
    $("#signOn").mouseleave(function() {
        if(!signIsOn) {
            $("#signOn").hide();
        }
    })
    
//    
//    $("#signOn").hover(
//        function(){
//            $("#signOn").show();
//        },
//        function(){
//            //alert("wut");
//            $("#signOn").hide();
//        }
//    );
});