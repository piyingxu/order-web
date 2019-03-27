function test() {
    alert(11);
}

function GetJsonData() {
    var json = {
        "tradeType": 2,
        "refID": "010120190326000010001321509993093500",
    };
    return json;
}

$(document).ready(function(){
    $("#b01").click(function(){
        $.ajax({
            type: "POST",
            url: "/ghana/api/nsano/checkStatus",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(GetJsonData()),
            dataType: "json",
            success: function (message) {
                console.log(message)
                if (message > 0) {
                    alert("请求已提交！我们会尽快与您取得联系");
                }
            },
            error: function (message) {
                $("#request-process-patent").html("提交数据失败！");
            }
        });
    });
});