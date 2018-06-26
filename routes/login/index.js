const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/login')
        .get((req, res) => {
            res.render('login');
        })
        .post((req,res) =>  {
        var uname = req.body.username;
        var pwd = req.body.password;
        if (uname == 'bosuksh' && pwd == '123123') {
            req.session.uname = 'bosuksh';   
            req.session.password= '123123';
            req.session.name='Sanghyup';
            // req.session.hint1=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint2=  {'flag': 0, 'who': '왕세자, 사신', 'where': 4, '16:00': NULL, 'subject': '병사1', 'content': '왕세자가 외국사신과 4시경 #5에서 미팅을 가졌습니다.'}
            // req.session.hint3=  {'flag': 0, 'who': '왕세자, 왕세자 동생', 'where': 13, 'when': '18:00', 'subject': '병사1', 'content': '저녁 6시경 왕세자와 왕세자의 동생은 평소와 다르게 함께 #13에서 저녁을 먹었습니다.'}
            // req.session.hint4=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': '22:00', 'subject': '병사1', 'content': '왕세자가 10시쯤 여기서 칼에 맞아 사망한 것으로 추정됩니다.'}
            // req.session.hint5=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': '22:00', 'subject': '병사1', 'content': '10시 조금 지나서 병사가 #2에서 순찰을 돌고 있는 것을 보아 함께 순찰을 돌았습니다. 아, 그리고 자정에 왕세자의 동생께서 황급히 떠나시는 것을 목격하였습니다.'}
            // req.session.hint6=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '근무표', 'content': '9am-1pm 왕세자 호위, 2pm-6pm 근정전 근무, 7pm-12am 동궁 근무'}
            // req.session.hint7=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint8=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint9=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint10=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint11=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint12=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint13=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint14=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint15=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint16=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint17=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint18=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint19=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint20=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint21=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}
            // req.session.hint22=  {'flag': 0, 'who': '왕세자', 'where': 2, 'when': NULL, 'subject': '병사1', 'content': '다잉 메시지는 청룡의 모습으로 추정되는 그림입니다. (청룡 그림)'}

            res.redirect('/scene1');
        }
    })    
    return route;
}
