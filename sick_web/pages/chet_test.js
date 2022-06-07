var x=0;
var send = (function() {
    var Words = document.getElementById("words");
    var Who = document.getElementById("who");
    var talkWords = document.getElementById("talkwords");
    var talkSub = document.getElementById("talksub");
    
    
    return {

        init: function() {
            
            this.event();
        },
        event: function() {
            var that = this;
            talkSub.onclick = function() {
                that.chart();
            }
            talkWords.onkeydown = function(e) {
                var keyCode = e.keyCode || e.which;
                if(e.ctrlKey) {
                    if(keyCode == 13) {
                        that.chart();;
                    }
                }
            }

        },
        chart: function() {
            var str = "";
            if(talkWords.value != "是" && talkWords.value != "否") {
                alert("請輸入是或否");
                return;
            }
            
            str = '<div class="btalk"><span>' + talkWords.value + '</span><img src="../images/you.png"/><p>你</p></div>';
            // if(Who.value == 0) {
            //     str = '<div class="atalk"><span>' + talkWords.value + '</span><img src="img/a.jpg"/><p>小哥哥</p></div>';
            // } else {
            //     str = '<div class="btalk"><span>' + talkWords.value + '</span><img src="img/b.jpg"/><p>小姐姐</p></div>';
            // }
            Words.innerHTML = Words.innerHTML + str;
            talkWords.value = "";
            if (x == 0){
                str = '<div class="atalk"><span>' + "是否有呼吸道等症狀？" + '</span><img src="../images/D.png"/><p>機器人</p></div>';
                Words.innerHTML = Words.innerHTML + str;
                talkWords.value = "";
            }
            if (x == 1){
                str = '<div class="atalk"><span>' + "恭喜你並未確診！！" + '</span><img src="../images/D.png"/><p>機器人</p></div>';
                Words.innerHTML = Words.innerHTML + str;
                talkWords.value = "";
            }
            // str = '<div class="atalk"><span>' + "是否有呼吸道等症狀？" + '</span><img src="../images/D.png"/><p>機器人</p></div>';
            // Words.innerHTML = Words.innerHTML + str;
            // talkWords.value = "";
            document.getElementById("trytime").innerHTML = x;
            x = x+1;
        }

    }

}());

send.init();
