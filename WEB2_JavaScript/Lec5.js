//ex. https://m.facebook.com/story.php?story_fbid=2967159400038807&id=218158748272233

var 당첨자수 = 4;
//var 댓글선택자 = '._3b-9>div>.UFIComment .UFICommentActorName';
//이전과 페이지 방식이 달라짐. 새로 찾음 >.<!!
var 댓글선택자 = '._2b05';

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

var list = [];
document.querySelectorAll(댓글선택자).forEach(function(e) {
    list.push(e.innerText);
});
list = list.filter((v, i, a) => a.indexOf(v) === i);

shuffle(list)
console.log(list.slice(0, 당첨자수));