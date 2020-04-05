$(document).ready(function () {

    let headerCode = "";

    $("#language").change(function () {
        let lang = $('#form #language').val();
        switch (lang) {
            case "":
                headerCode = "/* Static Boilerplate Code will be loaded here */";
                break;
            case "c":
                headerCode = "#include <stdio.h>\n" +
                    "#include <stdlib.h>\n" +
                    "/*create void function mySortAlgo(int size) to begin*/\n" +
                    "int arr[100000];\n" +
                    "void mySortAlgo(int);\n" +
                    "void main() {\n" +
                    "\tint i, size; scanf(\"%d\",&size);\n" +
                    "\tfor(i = 0; i < size; i++) {\n" +
                    "\t\tscanf(\"%d\",&arr[i]);\n" +
                    "\t}\n" +
                    "\tmySortAlgo(size);\n" +
                    "}";
                break;
            case "java":
                headerCode = "import java.util.*;\n" +
                    "/* Create class Test and a static function mySortAlgo to begin */\n" +
                    "class Main {\n" +
                    "\tpublic static void main (String args[]) {\n" +
                    "\t\tScanner sc = new Scanner(System.in);\n" +
                    "\t\tint size = sc.nextInt();\n" +
                    "\t\tint[] arr = new int[size];\n" +
                    "\t\tfor(int i = 0; i < size; i++ ) {\n" +
                    "\t\t\tarr[i] = sc.nextInt();\n" +
                    "\t\t}\n" +
                    "\t\tTest.mySortAlgo(arr, size);\n" +
                    "\t}\n" +
                    "}";
                break;
            case "python2.7":
                headerCode = "file1 = open('input.txt', 'r')\n" +
                    "arr = file1.readlines()\n";
                break;
            case "python3.2":
                headerCode = "file1 = open('input.txt', 'r')\n" +
                    "arr = file1.readlines()\n";
                break;
        }
        $('#headerCode').html(headerCode);
    })

    $('#form #submit').click(function () {
        let analytics = []
        let output = []
        $('#output').hide();
        $('#output').html('<br/>Generating the output &nbsp;&nbsp;&nbsp; <img src="./img/loader.gif" />');
        $('#output').fadeIn();
        $('#form #submit').attr("disabled", "disabled");
        $('#form .error').html('');
        var isError = 0;
        var code = headerCode + $('#form #code').val();
        var language = $('#language').val();

        if (language == '') {
            alert("Select Language");
            $('#output').html('');
            $('#output').hide();
            $('#form #submit').removeAttr("disabled", "disabled");
            return false;
        }

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
        var dataString = 'code=' + encodeURIComponent(code) + '&language=' + encodeURIComponent(language);
        $.ajax({
            type: "POST",
            url: "compile.php",
            data: dataString,
            success: function (res) {
                let line = res.split("##__##");
                line.forEach(exe => {
                    let x = exe.split("#_#");
                    output.push(x[0]);
                    analytics.push(Number(x[1]));
                });
                output.pop();
                analytics.pop();
                $('#output').html(output[0]);
                $('#exeTime').html("<pre>Execution Time(secs): " + analytics + "</pre>");
                $('#form #submit').removeAttr("disabled", "disabled");
            },
            error: function (ob, errStr) {
                $('#output').html('');
                $('#form #submit').removeAttr("disabled", "disabled");
            }
        });
        createAnalyticsGraph(analytics);
        return false;
    });
});