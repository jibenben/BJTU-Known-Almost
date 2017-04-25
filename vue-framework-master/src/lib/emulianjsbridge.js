/**
 * native js交互
 * Created by WAKE on 2016/11/26.
 */

(function () {
    var EmulianJSBridge = window.EmulianJSBridge;
    /**
     * [构造函数]
     * */
    function JSBridge() {

    }
    /**
     * [分享设置]
     * @param {Object} shareContent 分享内容，属性包括：imgUrl, link, desc, title
     * {
     *    
     * }
     * */
    JSBridge.prototype.share = function(shareContent) {
        /** 微信分享 **/

        var WeixinJSBridge = window.WeixinJSBridge;
        if (WeixinJSBridge) {
            WeixinJSBridge.on('menu:share:appmessage', function() {
                WeixinJSBridge.invoke('sendAppMessage', {
                    img_url: shareContent.imgUrl,
                    img_width: 120,
                    img_height: 120,
                    link: shareContent.link,
                    desc: shareContent.desc,
                    title: shareContent.title
                });
            });
            WeixinJSBridge.on('menu:share:timeline', function() {
                WeixinJSBridge.invoke('shareTimeline', {
                    img_url: shareContent.imgUrl,
                    img_width: 120,
                    img_height: 120,
                    link: shareContent.link,
                    desc: shareContent.desc,
                    title: shareContent.title
                });
            });
        } else {
            document.addEventListener('WeixinJSBridgeReady', function () {
                WeixinJSBridge = window.WeixinJSBridge;
            });
        }
        /** emulian分享 **/
        if (EmulianJSBridge) {
            console.log('+++++++++++++++++++++EmulianJSBridge')
            // EmulianJSBridge.on('share_info', function() {
                EmulianJSBridge.call('share_info', {
                    image: shareContent.imgUrl,
                    link:  shareContent.link,
                    title: shareContent.title,
                    desc:  shareContent.desc
                });
            // });
            console.log(shareContent);
        } else {
            document.addEventListener('EmulianJSBridgeReady', function () {
                EmulianJSBridge = window.EmulianJSBridge;
            });
        }
    };
    window.JSBridge = JSBridge;
    console.log(JSON.stringify(EmulianJSBridge));
})();