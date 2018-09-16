
var backpacker = [{
        name: '김동환',
        position: '대표이사',
        team: 'CEO',
        avatar: '',
    },
    {
        name: '김동철',
        position: '기술이사',
        team: 'engineer',
        avatar: '',
    },
    {
        name: '이재군',
        position: '디자이너',
        team: 'designer',
        avatar: '',
    },
    {
        name: '박정호',
        position: 'engineer',
        team: 'engineer',
        avatar: '',
    },
    {
        name: '하동현',
        position: 'backend',
        team: 'engineer',
        avatar: '',
    },
    {
        name: '김경신',
        position: 'backend',
        team: 'manager',
        avatar: '',
    },
    {
        name: '윤태건',
        position: 'backend',
        team: 'engineer',
        avatar: '',
    },
    {
        name: '최재훈',
        position: 'backend',
        team: 'scouter',
        avatar: '',
    },
    {
        name: '박우현',
        position: 'backend',
        team: 'engineer',
        avatar: '',
    },
    {
        name: '정성묵',
        position: 'backend',
        team: 'engineer',
        avatar: '',
    },
    {
        name: '김경범',
        position: 'backend',
        team: 'PR',
        avatar: '',
    },
    {
        name: '임백호',
        position: 'backend',
        team: 'educator',
        avatar: '',
    },
    {
        name: '강혜지',
        position: 'backend',
        team: 'manager',
        avatar: '',
    },
    {
        name: '이원희',
        position: 'backend',
        team: 'manager',
        avatar: '',
    },
    {
        name: '김혜림',
        position: 'backend',
        team: 'scouter',
        avatar: '',
    },
    {
        name: '박희균',
        position: 'backend',
        team: 'designer',
        avatar: '',
    },
    {
        name: '조동현',
        position: 'backend',
        team: 'marketer',
        avatar: '',
    },
    {
        name: '박선재',
        position: 'backend',
        team: 'engineer',
        avatar: '',
    },
    {
        name: '강지윤',
        position: 'backend',
        team: 'scouter',
        avatar: '',
    },
    {
        name: '나정귀',
        position: 'backend',
        team: 'educator',
        avatar: '',
    },
    {
        name: '김은아',
        position: 'backend',
        team: 'designer',
        avatar: '',
    },
    {
        name: '강예솔',
        position: 'backend',
        team: 'manager',
        avatar: '',
    },
    {
        name: '이태욱',
        position: 'backend',
        team: 'engineer',
        avatar: '',
    },
    {
        name: '나혜정',
        startDate: '20171001',
        resign: '20171001',
    },
    {
        name: '김현우',
        position: 'backend',
        team: 'trade',
        avatar: '',
    },
    {
        name: '김유라',
        position: 'backend',
        team: 'designer',
        avatar: '',
    },
    {
        name: '김상혜',
        position: 'backend',
        team: 'marketer',
        avatar: '',
        startDate: '20171101',
    },
    {
        name: '박인정',
        position: 'backend',
        team: 'marketer',
        avatar: '',
    },
    {
        name: '허수정',
        position: 'marketer',
        team: 'marketer',
        avatar: '',
    },
    {
        name: '임은정',
        position: 'VMD',
        team: 'scouter',
        avatar: '',
    },
    {
        name: '이재은',
        position: 'backend',
        team: 'trade',
        avatar: '',
        startDate: '20171111',
    },
    {
        name: '이수민',
        position: 'backend',
        team: 'trade',
        avatar: '',
        startDate: '20171111',
        resign: '',
    },
    {
        name: '한경구',
        position: 'backend',
        team: 'designer',
        avatar: '',
        startDate: '20171101',
        resign: '',
    },
];

var ju = [
    "청소기",
    "대걸레",
    "마루바닥",
    "집기닦이",
    "공기청정기",
    "유리청소",
    "전등",
];

// 한글 명칭 추가
backpacker = (function (bp) {
    var ko = {
        ceo: '대표이사',
        designer: '디자이너',
        engineer: '개발자',
        trade: 'B2B',
        scouter: '작가영입',
        manager: '운영',
        educator: '작가교육',
        marketer: '마케팅',
        pr: '홍보',
    }
    bp = bp.map(function (v, i, a) {
        var t = '' + v.team;
        t = t.toLowerCase();

        if (typeof t === 'undefined') {
            return
        }

        for (var k in ko) {
            var re = new RegExp(k, 'g');
            var res = t.match(re);

            if (Array.isArray(res)) {
                v.ko = ko[k];
                break;
            }
        }
        return v;
    });

    return bp;
}(backpacker));