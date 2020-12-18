let wrap = document.querySelector(".wrapper");
let html = document.querySelector(".left");
let style = document.querySelector(".style");
let delay = 50;
let n = 0;
let str2 = "";
let string = `
/*
你好，我叫小胡
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
*/
.left{
    border:1px solid red;    
}

  
/*做个左心室和右心室*/
.heart{
        height: 0px;
        width: 0px;
        margin: 0 auto;
        border-top: 100px solid rgba(0,0,0,0);
        border-right: 100px solid rgba(0,0,0,0);
        border-bottom: 100px solid yellow;
        border-left: 100px solid blue;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg); 
        
  }
  /*做个左心房*/
  .heart::before{
        content:'';
        height:50px;
        width: 100px;
        display:block;
        border-radius: 100px 100px 0 0;
        background: red;
        transform: rotate(45deg) translate(-103px,-6px);
  }
  /*再做个右心房*/
  .heart::after{
        content:'';
        height:50px;
        width: 100px;
        display:block;
        border-radius: 100px 100px 0 0;
        background: green;
        transform: rotate(45deg) translate(-39px,-41px);
  }
  /*给心做几个关键帧*/
  @keyframes beat
  {
    0% {transform:rotate(-45deg) scale(1.0,1.0)}
    50% {transform:rotate(-45deg) scale(1.5,1.5)}
    100%{transform:rotate(-45deg) scale(1.0,1.0)}
  }
  /*接着让这颗心跳起来*/
  .heart{
    animation:beat 1s infinite;
  }
`;

let step = () => {
  setTimeout(() => {
    if (n >= string.length) {
      return;
    }
    if (string[n] === "\n") {
      //字符串里如果是回车就改成html换行
      str2 = str2 + "<br>";
    } else if (string[n] === " ") {
      str2 += "&nbsp;";
    } else {
      //如果是回车就直接用
      str2 = str2 + string[n];
      html.innerHTML = str2;
      style.innerHTML = string.substring(0, n);
      console.log(str2);
    }
    window.scrollTo(0,999999)
    html.scrollTo(0, 99999);
    n++;
    step();
  }, delay);
};

step();
