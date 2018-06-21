const express = require('express');
const route = express.Router();
const request = require('request');

module.exports = (app) => {
    route.get('/place', (req, res) => {
        var place = req.query.place; //query로 넘어온 값

        // api key를 헤더에 넣어주기 위하여
        var headers = {
            'Authorization': 'KakaoAK 4a77dd74574b57ba0ff8c8ecdb314143'
        }

        var url = "https://dapi.kakao.com/v2/local/search/keyword.json?y=37.56515088211023&x=126.93927688481546&radius=20000&query=" + encodeURIComponent(place); //api



        //api 호출
        request.get({
            headers: headers,
            url: url
        }, (err, res1, body) => {

            body = JSON.parse(body); //response value를 파싱한다.
            // var content = body['documents']; //우리가 필요한건 documents
            res.send(body);
            //   res.render('search', {'content': content}); //랜더링 한 것을 response
        });
    });

    return route;
};