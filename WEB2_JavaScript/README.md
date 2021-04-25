생활코딩 WEB2-JavaScript
========================

>Lec4
<https://www.w3schools.com/>

>Lec5
* 길이 '_'.length
* 페이스북 댓글 랜덤 추출
* 코드 수정(왜 안되나 했더니 더 간소화됨)

>Lec6
* DataType - String, Number
* <https://developer.mozilla.org/ko/>
* str.indexOf('찾는거')
* str.trim()  //빈칸 없애기

>Lec7
DataType - 변수와 대입연산자

>Lec8
웹브라우저 제어

>Lec9-11
CSS 기초
* class -> ._
* id -> #

>Lec12
제어할 테그 선택하기
ex. document.querySelector('body').style.backgroundColor = "red";

>Lec15
document.write(1===1); -> true

>Lec17
document.querySelector('_')

>Lec20
배열 - array = []

>Lec22
```
document.write('<li><a href="http://a.com/' + 배열[i] + '">' +배열[i]+'</a></li>'>)
```

>Lec25
함수
function name(){
    //code;
}

>Lec31
```
coworkers = {
    "programmer":"egoing",
    "designer":"leezche"
}
for(var key in coworkers) {
    document.write(coworkers[key]+'<br>')
}
```

>Lec35
* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
* jQuery는 새로운 언어가 아니라, CSS를 편하게 다루기 위한 라이브러리

>Lec37
* document
* DOM(document object model)
* window - 웹브라우저 자체를 제어
* ajax - 웹페이지 reload 안하고 제어
* cookie - reload 해도 똑같은 상태 유지. 사용자를 위한 개인화된 서비스
* offline web application - 인터넷이 끊겨도 동작하는 페이지
* webRTC - 화상통신
* speech - 사용자의 음성 인식, 음성으로 정보 전달
* webGL - 3차원 그래픽으로 게임제작
* webVR - 가상현실