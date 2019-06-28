$(function () {
    var parentMenuId = 1;
    $.ajax({
        type: "POST",
        url: "/orderManager/ussd/index",
        data: "{\"protocolId\":\"" + parentMenuId + "\",\"msisdn\":\"233244377790\"}",
        contentType: "application/json; charset=utf-8",
        success: function (message) {
            if (message.respCode == '00000000') {
                var ussdresp = message.data.ussdresp;
                var action = ussdresp.action;
                $('#bodyDiv').append("<p>" + ussdresp.title + "</p>")
                for (var i = 0; i < ussdresp.menus.length; i++) {
                    var tempId = "p_" + (i+1);
                    var menuId = ussdresp.menus[i].menuId;
                    $('#bodyDiv').append("<p id=" + tempId + " menuId=" + menuId + ">" + ussdresp.menus[i].menuName + "</p>");
                }
                $('#bodyDiv').append("<input id=\"input_" + parentMenuId + "\" type=\"text\" width=\"50px\" />&nbsp;&nbsp;<button id=\"sendBtn\" onclick=\"send("+ parentMenuId + ",'"+ action + "')\">send</button>")
            } else {
                $('#bodyDiv').html("服务器繁忙，请稍候重试!")
            }
        },
        error: function (message) {
            $('#bodyDiv').html("服务器繁忙，请稍候重试!");
        }
    });
});


function send (parentMenuId, action) {
   var input = $("#input_" + parentMenuId).val();
   var param = '';
   var menuId = '1';
   if (action == 'showMenu') {
       menuId = $("#p_" + input).attr("menuId");
   } else if (action == 'input'){
       menuId = parentMenuId;
       param = input;
   }

   if (menuId != undefined) {
       $.ajax({
           type: "POST",
           url: "/orderManager/ussd/index",
           data: "{\"protocolId\":\""+ menuId +"\",\"msisdn\":\"233244377790\",\"param\":\""+ param + "\"}",
           contentType: "application/json; charset=utf-8",
           success: function (message) {
               if (message.respCode == '00000000') {
                   var ussdresp = message.data.ussdresp;
                   if (ussdresp.action == 'showMenu') {
                       $('#bodyDiv').html("<p>" + ussdresp.title + "</p>")
                       for (var i = 0; i < ussdresp.menus.length; i++) {
                           var tempId = "p_" + (i+1);
                           var tempmenuId = ussdresp.menus[i].menuId;
                           $('#bodyDiv').append("<p id=" + tempId + " menuId=" + tempmenuId + ">" + ussdresp.menus[i].menuName + "</p>");
                       }
                       $('#bodyDiv').append("<input id=\"input_"+ menuId+ "\" type=\"text\" width=\"50px\" />&nbsp;&nbsp;<button id=\"sendBtn\" onclick=\"send("+ menuId + ",'" + ussdresp.action +"')\">send</button>");
                   } else if (ussdresp.action == 'prompt') {
                       $('#bodyDiv').html("<p>" + ussdresp.title + "</p>");
                       $('#bodyDiv').append("<p>"+ ussdresp.menus[0].menuName +"</p>");
                   } else if (ussdresp.action == 'input') {
                       var tempMenu = ussdresp.menus[0];
                       $('#bodyDiv').html("<p>" + ussdresp.title + "</p>");
                       $('#bodyDiv').append("<p>"+ tempMenu.menuName +"</p>");
                       $('#bodyDiv').append("<input id=\"input_"+ tempMenu.menuId + "\" type=\"text\" width=\"50px\" />&nbsp;&nbsp;<button id=\"sendBtn\" onclick=\"send("+ tempMenu.menuId + ",'" + ussdresp.action + "')\">send</button>");
                   }
               } else {
                   $('#bodyDiv').html("服务器繁忙，请稍候重试!")
               }
           },
           error: function (message) {
               $('#bodyDiv').html("服务器繁忙，请稍候重试!");
           }
       });
   }


}