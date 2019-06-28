$(function () {
    $.ajax({
        type: "GET",
        url: "/orderManager/order/sell?merchantId=1",
        contentType: "application/text; charset=utf-8",
        success: function (message) {
            if (message.respMsg == 'success') {
                var dataArr = message.data;
                var fisrtMenu = dataArr[0];
                $('.wrap').append
                (
                    "<div id='right_lanmu' class='top gradient'>" +
                    "<div class='lanmu_1'></div>" +
                    "<div class='lanmu_2'>" + fisrtMenu.categoryName + "</div>" +
                    "</div>"
                );
                var categoryArr = [];
                for (var i = 0; i < dataArr.length; i++) {
                    categoryArr.push(dataArr[i].categoryName);
                }
                var categoryArrUnique = $.unique(categoryArr);
                var leftHtml = "";
                var rightHtml = "";
                for (var i = 0; i < categoryArrUnique.length; i++) {
                    if (i == 0) {
                        leftHtml = leftHtml + "<div class='col-1'><table class='sTable'>"
                    }
                    var tr_name = "tr_item_" + i;
                    var td_name = "td_item_" + i;
                    leftHtml = leftHtml +
                        "<tr id='"+ tr_name + "' onclick='changeItem(this)'>" +
                        "   <td id='" + td_name +"' colspan='1' style='width:3px;height:10px;background-color:red;'></td>" +
                        "   <td colspan='4'><p>" + categoryArrUnique[i] + "</p></td>" +
                        "   <td colspan='1' width='20px' valign='top'>" +
                        "      <div class='tb_shuzi'><span>1</span></div>" +
                        "    </td>" +
                        "</tr>";
                    if (i == categoryArrUnique.length - 1) {
                        leftHtml = leftHtml + "</table></div>";
                    }
                }
                rightHtml = "<div class='col-2'>" +
                    "<div id=\"menu_lan_1\" class=\"lanmu\">\n" +
                    "            <div class=\"lanmu_1\"></div>\n" +
                    "            <div class=\"lanmu_2\"></div>\n" +
                    "        </div>" +
                    "" +
                    "</div>";


                $('.wrap').append(leftHtml);
                $('.wrap').append(rightHtml);

                // {"respCode":"00000000","respMsg":"success","data":[{"merchantId":"1","categoryId":"1","categoryName":"惹味前菜","dishName":"农家小炒肉","dishPrice":18.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":100},{"merchantId":"1","categoryId":"1","categoryName":"惹味前菜","dishName":"土豆牛腩","dishPrice":22.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":200},{"merchantId":"1","categoryId":"1","categoryName":"惹味前菜","dishName":"爆炒猪肝","dishPrice":15.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":300},{"merchantId":"1","categoryId":"1","categoryName":"惹味前菜","dishName":"鱼香肉丝","dishPrice":16.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":500},{"merchantId":"1","categoryId":"2","categoryName":"风味小炒","dishName":"农家小炒肉","dishPrice":18.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":100},{"merchantId":"1","categoryId":"2","categoryName":"风味小炒","dishName":"土豆牛腩","dishPrice":22.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":200},{"merchantId":"1","categoryId":"2","categoryName":"风味小炒","dishName":"爆炒猪肝","dishPrice":15.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":300},{"merchantId":"1","categoryId":"2","categoryName":"风味小炒","dishName":"鱼香肉丝","dishPrice":16.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":500},{"merchantId":"1","categoryId":"3","categoryName":"干锅系列","dishName":"农家小炒肉","dishPrice":18.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":100},{"merchantId":"1","categoryId":"3","categoryName":"干锅系列","dishName":"土豆牛腩","dishPrice":22.00,"dishDescription":"美味可口","dishIcon":"yxrs.png","dishStock":200}]}


            } else {
                alert("服务器繁忙，请稍候重试！");
            }
        },
        error: function (message) {
            alert("服务器繁忙，请稍候重试！");
        }
    });
});