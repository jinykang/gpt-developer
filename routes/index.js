var express = require('express');
var router = express.Router();

/* 임시메인 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//모든 사용자 채팅하기 
router.get('/chat', function(req, res, next) {
  res.render('chat.ejs');
});


//채팅방 기준 채팅하기 
router.get('/groupchat', function(req, res, next) {
  res.render('groupchat.ejs');
});


//ChatGPT 3.5 터보 사용자 채팅하기 
router.get('/aichat', function(req, res, next) {
  res.render('aichat.ejs');
});

module.exports = router;
