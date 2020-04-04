$(document).ready(function () {
    $('#form #submit').click(function () {
        $('#output').hide();
        $('#output').html('<br/>Generating the output &nbsp;&nbsp;&nbsp; <img src="./img/loader.gif" />');
        $('#output').fadeIn();
        $('#form #submit').attr("disabled", "disabled");
        $('#form .error').html('');
        var isError = 0;
        var code = $('#form #code').val();
        var input = $('#form #input').val();
        var language = $('#form #language').val();
        if ($.trim(code) == '') {
            $('#form #errorCode').html('The code area is empty');
            $('#form #code').focus();
            isFocus = 1;
            isError = 1;
        }
        if (isError == 1) {
            $('#output').html('');
            $('#output').hide();
            $('#form #submit').removeAttr("disabled", "disabled");
            return false;
        }
        $.ajaxSetup({
            cache: false
        });
        var dataString = 'code=' + encodeURIComponent(code) + '&input=' + encodeURIComponent(input) + '&language=' + encodeURIComponent(language);
        $.ajax({
            type: "POST",
            url: "compile.php",
            data: dataString,
            success: function (res, exeTime) {
                console.log(res);
                let msg = res.split("#_#");
                $('#output').html(msg[0]);
                $('#exeTime').html("<pre>Execution Time(secs): " + msg[1] + "</pre>");
                $('#form #submit').removeAttr("disabled", "disabled");
            },
            error: function (ob, errStr) {
                $('#output').html('');
                $('#form #submit').removeAttr("disabled", "disabled");
            }
        });
        return false;
    });
});
