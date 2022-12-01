var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{get:function(){supportsPassive=true;}});window.addEventListener("testPassive", null, opts);window.removeEventListener("testPassive", null, opts);} catch (e) {}
// ハンバーガーメニュー---------------------------------------------------
const ham = document.querySelector(".js-l-header__burger-btn"); //単一の要素を取得
const menu = document.querySelector(".js-l-header__burger-menu");
const body = document.querySelector("body");
/*---スマホのときはtouchstart---*/
let flag2 = false;
ham.addEventListener("touchstart",{},supportsPassive?{passive:true}:false, function () { //要素が押されたら
  flag2 = true;
  ham.classList.toggle("active"); //toggle 切り替え
  if (ham.classList.contains("active")) { //判定
    menu.classList.add("active"); //追加
    body.classList.add("fixed"); //追加
  } else {
    menu.classList.remove("active"); //削除
    body.classList.remove("fixed"); //削除
  }
});
/*---PCではclick---*/
ham.addEventListener("click", function () { //要素がクリックされたら
  if (flag2) {
    flag2 = false;
  } else {
  ham.classList.toggle("active");
    if (ham.classList.contains("active")) {
      menu.classList.add("active");
      body.classList.add("fixed");
      } else {
        menu.classList.remove("active");
        body.classList.remove("fixed");
  }
}});

// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように-----------------
const link = document.querySelectorAll(".l-header__burger-menu-link"); //複数の要素を取得
//イベントオブジェクト生成
const triggerEvent1 = new Event('touchstart')
const triggerEvent2 = new Event('click')
/*---スマホのときはtouchstart---*/
let flag3 = false;
link.forEach( //querySelectorAllは配列なのでループさせる必要がある
  e => e.addEventListener("touchstart",{},supportsPassive?{passive:true}:false, function () { //要素がクリックされたら eventのe
    flag3 = true;
    ham.dispatchEvent(triggerEvent1);
  })
);
/*---PCではclick---*/
link.forEach(
  e => e.addEventListener("click", function () {
    if (flag3) {
      flag3 = false;
    } else {
    ham.dispatchEvent(triggerEvent2);
  }
}));

const target = '#slider1';
const options = {
	type : 'loop',
	speed: 600,
	padding: '20%',
	perPage: 1,
	perMove: 1,
	wheel: true,
	releaseWheel: true,
	trimSpace: false,
	focus: 'center',
	updateOnMove: false,
  gap:20,
}
const mySplide = new Splide(target, options);

mySplide.mount();

const target2 = '#slider2';
const mySplide2 = new Splide(target2, options);

mySplide2.mount();