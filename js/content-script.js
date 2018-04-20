
'use strict'

var BackColor = '#111111'
var BackColorLight = '#444444'
var TextColor = '#444444'

window.onload = function() {
  console.log("Easily Viewable BackGround");

  switch (location.host) {
    // ツイッター
    case "twitter.com":
      $('body').css('background-color', BackColor);

      break;
    // ハーメルン
    case "novel.syosetu.org":
      document.body.style.backgroundColor = BackColor
      $('#container').css('background-color', BackColor);
      $('#container').css('color', TextColor);
      $('.topicPath').css('background-color', BackColorLight);

    case "syosetu.org":
      document.body.style.backgroundColor = BackColor
      $('#container').css('background-color', BackColor);
      $('#container').css('color', TextColor);
      $('.topicPath').css('background-color', BackColorLight);
      break;
  }
}

// message listener.
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  Download(msg.download)
  Close(msg.close)
});
