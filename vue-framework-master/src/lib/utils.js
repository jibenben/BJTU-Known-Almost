/**
 * 通用工具类
 * Created by wake on 2016/12/25.
 */

/**
 * 使用rem单位，初始化html字体大小
 * @param maxWidth {number} 页面宽度
 */

import Sha1 from 'sha1'
import md5 from 'md5'

const initRootFontSize = function (doc_01 = document, win_01 =window) {
    var docEl_01 = doc_01.documentElement;
    var resizeEvt_01 = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc_01 = function () {
        var clientWidth_01 = docEl_01.clientWidth;
        var clientheight_01 = docEl_01.clientHeight;
        if (!clientWidth_01) return;
        if(clientWidth_01<1080){
          docEl_01.style.fontSize = (clientWidth_01 /1080*100).toFixed(1)+'px';
        }else{
          docEl_01.style.fontSize = 100+'px';
        }
    };
    recalc_01();
    if (!doc_01.addEventListener) return;
    win_01.addEventListener(resizeEvt_01, recalc_01, false);
};

const Base64 = function () {
 
    // private property
    let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 
    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
 
    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }
 
    // private method for UTF-8 encoding
    let _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
        return utftext;
    }
 
    // private method for UTF-8 decoding
    let _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}





// 取得cookie
const getCookie = function (name) {
    // (^| )name=([^;]*)(;|$),match[0]为与整个正则表达式匹配的字符串，match[i]为正则表达式捕获数组相匹配的数组；
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) {
        return unescape(arr[2]);
    }
    return null;
}


// 设置cookie
const setCookie = function (name,value) {
  var Days = 15; //此 cookie 将被保存 30 天
  var exp  = new Date();    //new Date("December 31, 9998");
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  if((typeof value == "string")&&(value.length > 0)){
      document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString();
  }else{
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval=getCookie(name);
      if(cval!=null)
          document.cookie=name +"="+cval+";expires="+exp.toGMTString();
  }
}

// 删除cookie
const deleteCookie = function (name,value) {
    //获取当前时间
    var date=new Date();
    //将date设置为过去的时间
    date.setTime(date.getTime()-10000);
    //将userId这个cookie删除
    document.cookie= name + "="+ escape(value) + ";expires="+date.toGMTString(); 
}


// 创建分享标题
const getShareTitle = function (now) {
    let posCon = {
        'Erlianhaote': '二连浩特',
        'Manzhouli': '满洲里',
        'Tianjin': '天津'
    };
    let _share_url = location.href;
    let lastIndex = location.hash.lastIndexOf('/');
    let hashCon = location.hash;
    let _thisHash = hashCon.substr(lastIndex+1, hashCon.length);
    function getDate(now){ 
      var month=now.getMonth()+1;
      var date=now.getDate();
      return month+"月"+date+'日';
    }
    var weixin_desc = getDate(now)+posCon[_thisHash]+'口岸木材最新参考报价';
    return weixin_desc;
}

// 请求门神借口  传参：借口特有参数  各个借口ajax方法
const getDoorGod = function (argument,EquNum, PGNum, UseName,InterfaceName, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://rest.emulian.com/wap/g/doorgod/auth.service');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(null); 
    xhr.onreadystatechange = function () {
    console.log(xhr.status);
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);


            // 判断门神借口是否请求成功
            if (res.rc === 0) {
                let data = res.data;
                window.doorGod = data.key;
                console.log(window.doorGod);
                


                // url请求参数字符串hash校验
                let searStr = strSearch(argument);
                let param_sha1 = Sha1(searStr);
                let hashsign = param_sha1 + window.doorGod;
                let hashsignMd5 = md5(hashsign);
                let timeStamp = new Date().getTime();
                let parHash = {
                  'hashsign': hashsignMd5,
                  'mbtoken': window.person.userid,
                  'timestamp': timeStamp,
                  'mbtoken': window.person.mb_token,
                  'v': '3.0'
                }
                // 合并公共参数和借口参数
                let param = mergeJsonObj(parHash, argument);
                // 参数字符串化
                let urlParam = strSearch(param);
                let url = createUrl(EquNum, PGNum, UseName,InterfaceName) + '?' + urlParam
                callback(url);
            }else{
                console.log('门神请求失败');
            }
        }
    };
    // xhr.send(params);  
}


// 拼接请求url
const createUrl = function (EquNum, PGNum, UseName,InterfaceName) {
    let equipment = ['wap','na','ios'];
    let postOrGet = ['g','p']
    let url = 'http://rest' + window.isMirror + '.emulian.com/' + equipment[EquNum] + '/' + postOrGet[PGNum] + '/' + UseName + '/' + InterfaceName + '.service';
    return url;
}

const ceshi = function () {
    alert(123);
}


// const hashSign = function (argument,callback) {
//     // url请求参数字符串hash校验
//     let searStr = strSearch(argument);
//     let param_sha1 = Sha1(searStr);
//     let hashsign = param_sha1 + window.doorGod;
//     let hashsignMd5 = md5(hashsign);
//     let timeStamp = new Date().getTime();
//     let parHash = {
//       'hashsign': hashsignMd5,
//       'mbtoken': window.person.userid,
//       'timestamp': timeStamp,
//       'mbtoken': window.person.mb_token,
//       'v': '3.0'
//     }
//     callback(parHash);
// }


/**
 * 微信分享
 * @param {Object} shareContent
 * {
 *      imgUrl: 分享图片url
 *      link: 分享链接
 *      title: 分享标题
 *      desc: 分享描述
 * }
 */
const share = function (shareContent) {
    let WeixinJSBridge = window.WeixinJSBridge;
    if (typeof WeixinJSBridge === 'object') {
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
};





const mergeJsonObj = function (jsonObj1, jsonObj2) {
    var jsonResult = {};
    for ( var item in jsonObj1) {
        jsonResult[item] = jsonObj1[item];
    }
    for ( var item in jsonObj2) {
        jsonResult[item] = jsonObj2[item];
    }
    return jsonResult;
}


const strSearch = function (obj) {
      let searchStr = '';
      for (var key in obj) {
        searchStr +=key + '=' + obj[key] + '&';
      }
      return searchStr;
}





// 替换页面title
const setTit = function (title) {
    let ua = navigator.userAgent;
    let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    document.title = title;
    if (isiOS) {
        let body = document.body;
        let iFrame = document.createElement('iframe');
        body.appendChild(iFrame);
        iFrame.addEventListener('load', function () {
            window.setTimeout(function () {
                iFrame.removeEventListener('load', function () {
                    iFrame.remove();
                });
            }, 0);
        });
    }
};


// 替换页面title
const setTitle = function (title) {
    document.title = title;
};
export default {
    initRootFontSize,
    share,
    setTitle,
    setCookie,
    getCookie,
    deleteCookie,
    getShareTitle,
    mergeJsonObj,
    strSearch,
    getDoorGod,
    createUrl,
    Base64,
    ceshi
}
