window.onbeforeunload = onbeforeunload_handler;
function onbeforeunload_handler() {
    var warning = "?????";
    return warning;
}

$(function () {
    $(document).keydown(function (event) {
        if ((event.altKey && event.keyCode == 83)) {
            //???????Alt+S??,S?ASCII??83?
            //alert( $("#btnPart a:not(:hidden)").length );
            if ($("#btnPart a:not(:hidden)").length == 1) {
                $("#btnPart a:not(:hidden)").click();
            }
        }
    });
});