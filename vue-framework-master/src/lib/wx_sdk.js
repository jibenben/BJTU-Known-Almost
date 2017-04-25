/**
 * 通用工具类
 * Created by wake on 2016/12/25.
 */

function setShareData(weixin_desc) {
    wx.ready(function() {

        var shareContent = {
                title: weixin_desc,
                desc: '木材码头，每天定时发布各口岸木材种类价格，用户可以通过木材码头app、微信实时关注木材行业最新报告',
                link: location.href,
                imgUrl: 'http://wap.mirror.emulian.com/images/index/logo.png'
            }
        wx.onMenuShareTimeline({
            title: shareContent.title,
            link: shareContent.link,
            imgUrl: shareContent.imgUrl
        });
        wx.onMenuShareAppMessage({
            title: shareContent.title,
            desc: shareContent.desc,
            link: shareContent.link,
            imgUrl: shareContent.imgUrl,
            type: 'link'
        });
    });
}
  function configWX(appId, timestamp, nonceStr, signature) {
    wx.config({
        debug: false,
        appId,
        timestamp,
        nonceStr,
        signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'chooseImage',
            'uploadImage'
        ]
    });
    setShareData(weixin_desc);
}

export default {
    setShareData,
    configWX

}
