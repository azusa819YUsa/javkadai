
//1から50のカウント
for(let cnt=1; cnt<51; cnt++){
  console.log(cnt);

  //50カウント終了
  if(cnt === 50){
    alert(cnt +"回カウントが終わりました");
  }


//１０回ごとのループ
if(cnt === 10){
  console.log("今" + cnt +"回ループしました。");
}

if(cnt === 20){
  console.log("今" + cnt +"回ループしました。");
}

if(cnt === 30){
  console.log("今" + cnt +"回ループしました。");
}

if(cnt === 40){
  console.log("今" + cnt +"回ループしました。");
}

if(cnt === 50){
  console.log("今" + cnt +"回ループしました。");
}


//４で割れる数です
  let waru= cnt % 4;
  if(waru === 0){
    console.log("4で割れる数です");
  }

}
