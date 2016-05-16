var express = require('express');
var crypto = require("crypto");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/login', function (req, res) {
    //生成密码的 md5 值
    var md5 = crypto.createHash('md5'),
        name = md5.update(req.query.zh).digest('hex');
    res.end(name)
});
router.get('/loginNumber', function (req, res) {
    //生成密码的 md5 值
    var md5 = crypto.createHash('md5'),
        loginNumber = md5.update(req.query.loginNumber).digest('hex');
    res.end(loginNumber)
});
router.get('/gettime', function (req, res) {

    var data = new Date();

    res.end(data.toString())
});

module.exports = router;
