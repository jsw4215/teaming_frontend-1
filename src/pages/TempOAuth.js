// Login.js

import { KAKAO_AUTH_URL } from "../apis/kakao/kakao";
//import Button from "../element/Button";
import kakaoBtn from "../static/kakaoBtn.png";

function TempOAuth() {
  //let 변수명 = new URL(window.location.href).searchParams.get('code')
  console.log(KAKAO_AUTH_URL);

  // function kakaoFunc(){
  // apis.
  // 	kakaoSend()
  // 		.then((res)=>{
  // 			console.log("res : ",res)
  // 		})
  // 		.catch((err) => {
  // 			console.log("err : ",err)
  // 		})
  // 	}

  return (
    <a href={KAKAO_AUTH_URL}>
      <img src={kakaoBtn} alt="카카오 버튼"></img>
      <span>카카오계정 로그인</span>
	</a>
  );
}

export default TempOAuth;
