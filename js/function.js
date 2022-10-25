$(document).ready(function() {

    /*手機切換漢堡選單*/
    $(".menu").hide();
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
        $(".menu").slideToggle("normal");
    });

    /*點擊錨點滑動到目的地*/
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 900);
    });
});

// /*成分飛出動畫效果*/

// var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 800}});
// // 離目標物多遠開始觸發
//     // build scenes
//     new ScrollMagic.Scene({triggerElement: "#trigger1"})
// 					.setClassToggle("#animtaion_obj_1", "obj_1_an") 
// // 增加CSS
//                     .addTo(controller);

//     // build scenes
//     new ScrollMagic.Scene({triggerElement: "#trigger1"})
// 					.setClassToggle("#animtaion_obj_2", "obj_2_an") 
// // 增加CSS
//                     .addTo(controller);

//     // build scenes
//     new ScrollMagic.Scene({triggerElement: "#trigger1"})
// 					.setClassToggle("#animtaion_obj_3", "obj_3_an") 
// // 增加CSS
//                     .addTo(controller);

//     // build scenes
//     new ScrollMagic.Scene({triggerElement: "#trigger1"})
// 					.setClassToggle("#animtaion_obj_4", "obj_4_an") 
// // 增加CSS
//                     .addTo(controller);


// /*特殊機能loading倒數*/
// //テキストのカウントアップの設定
// var bar = new ProgressBar.Line(splash_text, {//id名を指定
// 	strokeWidth: 0,//進捗ゲージの太さ
// 	duration: 1000,//時間指定(1000＝1秒)
// 	trailWidth: 0,//線の太さ
// 	text: {//テキストの形状を直接指定	
// 		style: {//天地中央に配置
// 			position:'absolute',
// 			left:'50%',
// 			top:'50%',
// 			padding:'0',
// 			margin:'0',
// 			transform:'translate(-50%,-50%)',
// 			'font-size':'1.2rem',
// 			color:'#fff',
// 		},
// 		autoStyleContainer: false //自動付与のスタイルを切る
// 	},
// 	step: function(state, bar) {
// 		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
// 	}
// });

/*特殊機能漢堡選單下圓形展開NAV*/
//アニメーションスタート
// bar.animate(1.0, function() { //バーを描画する割合を指定します 1.0 なら100%まで描画します
//     $("#splash").delay(500).fadeOut(800); //アニメーションが終わったら#splashエリアをフェードアウト
// });


$(".openbtn1").click(function() { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function() { //ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active'); //ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
});