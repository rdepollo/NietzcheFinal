$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBIGFRlyXwDTMW6w0Njsm3XkZLrbkjEJI4",
    authDomain: "nietzche-d99e2.firebaseapp.com",
    databaseURL: "https://nietzche-d99e2.firebaseio.com",
    projectId: "nietzche-d99e2",
    storageBucket: "nietzche-d99e2.appspot.com",
    messagingSenderId: "243064993259"
  };
  firebase.initializeApp(config);
  var bigData = firebase.database().ref();
var textmatrix = ["Do you believe in love?", "Are you happy in the present life?", "If everything you have ever done were to happen again, would you be content?", "Have you said anything you wish you could take back?", "Is life worthwhile?", "Do you believe in fate?", "Have you ever fallen in love?", "What would be the hardest moment from your life to relive?", "What would be the best moment from your life to relive?", "Do you ever feel like you're wasting time?", "Does time feel like it's moving faster as you get older?", "Do you think death is the end?", "Do you believe in past lives?", "Do you live in the present?", "Have you ever been stuck in the past?", "How do you feel about the future?", "Are you afraid of change?", "Are you afraid of feeling stuck?", "Are you the same person you were last year? Last month? Yesterday?", "Do you ever get déjà vu?", "Have you ever experienced something that you dreamed of?", "Do you remember your dreams often?", "Are you afraid of being comfortable?", "Are you afraid of conflict?", "What is your biggest regret?", "What is your greatest accomplishment?"];
  var quad_1 = false;
var quad_2 = false;
var quad_3 = false;
var quad_4 = false;
var loops = 0;
var looper = false;
var canplay1 = true;
var canplay2 = true;
var canplay3 = true;
var canplay4 = true;
var canplay5 = true;
var canplay6 = true;
var canplay7 = true;
var canplay8 = true;
var canplay9 = true;
var canplay10 = true;
var canplay11 = true;
var canplay12 = true;

/////////Function for shuffling the array of questions///////////
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
//////////////////////Randomizes text
shuffle(textmatrix);
$("#texter").html(textmatrix[loops]);
  ////////////////INITIALIZE GYRONORM
  var gn = new GyroNorm();
  var args = {
	frequency:1000,					// ( How often the object sends the values - milliseconds )
	gravityNormalized:true,			// ( If the gravity related values to be normalized )
	orientationBase:GyroNorm.GAME,		// ( Can be GyroNorm.GAME or GyroNorm.WORLD. gn.GAME returns orientation values with respect to the head direction of the device. gn.WORLD returns the orientation values with respect to the actual north direction of the world. )
	decimalCount:0,					// ( How many digits after the decimal point will there be in the return values )
	//logger:null,					// ( Function to be called to log messages from gyronorm.js )
	//screenAdjusted:false			// ( If set to true it will return screen adjusted values. )
};

  gn.init().then(function(){
    gn.start(function(data){
      /////////////////LOOP HANDLING///////////////////////////////////////////////////
          var angle = data.do.alpha;
          //$('.test-1').html(angle);
          //$('.test-3').html(loops);

          if (angle >= 270 && angle <= 360 && quad_4 == false ) {
            quad_1 = true;
          }  else if (angle >= 270 && angle <= 360 && quad_4 == true ) {
            //$('.test-2').html("1" + loops);
            quad_1 = true;
            quad_2 = false;
            quad_3 = false;
            quad_4 = false;
          } else if (angle >= 180 && angle <= 270 && quad_3 == false) {
            //$('.test-2').html("1 + 2" + loops);
            quad_2 = true;
          } else if (angle >= 90 && angle <= 180 && quad_4 == false) {
            //$('.test-2').html("1 + 2 + 3" + loops);
            looper = false;
          } else if (angle >= 0 && angle <= 90 && quad_1 == true && looper == false) {
            if (loops <= textmatrix.length) {
            loops++;
            looper=true;
            $("#texter").html(textmatrix[loops]);
          //  $('.test-2').html("1 + 2 + 3 + 4" + loops);
        } else {
        loops=0;
        looper=true;
        shuffle(textmatrix);
        $("#texter").html(textmatrix[loops]);
      //  $('.test-2').html("1 + 2 + 3 + 4" + loops);
      }
          }
//////////////////////////////////////////////////////////////////////////////

/////////////////////////////////SOUND CONTROLS///////////////////////////////
      var angle = data.do.alpha;
      $("#angler").html(angle);
      //$("body").html(data.do.alpha);
      if (angle <= 360 && angle >= 330 && canplay1==true) {
        bigData.push({
          note: "c",
        });
        canplay1=false;
        setTimeout(function(){ canplay1=true; }, 3000);
      } else if (angle < 330 && angle >= 300 && canplay2==true) {
        bigData.push({
          note: "g",
        });
        canplay2=false;
        setTimeout(function(){ canplay2=true; }, 3000);
      } else if (angle < 300 && angle >= 270 && canplay3==true) {
        bigData.push({
          note: "d",
        });
        canplay3=false;
        setTimeout(function(){ canplay3=true; }, 3000);
      } else if (angle < 270 && angle >= 240 && canplay4==true) {
        bigData.push({
          note: "a",
        });
        canplay4=false;
        setTimeout(function(){ canplay4=true; }, 3000);
      } else if (angle < 240 && angle >= 210 && canplay5==true) {
        bigData.push({
          note: "e",
        });
        canplay5=false;
        setTimeout(function(){ canplay6=true; }, 3000);
      } else if (angle < 210 && angle >= 180 && canplay6==true) {
        bigData.push({
          note: "b",
        });
        canplay7=false;
        setTimeout(function(){ canplay7=true; }, 3000);
      } else if (angle < 180 && angle >= 150 && canplay7==true) {
        bigData.push({
          note: "fsharp",
        });
        canplay8=false;
        setTimeout(function(){ canplay8=true; }, 3000);
      } else if (angle < 150 && angle >= 120 && canplay8==true) {
        bigData.push({
          note: "csharp",
        });
        canplay9=false;
        setTimeout(function(){ canplay9=true; }, 3000);
      } else if (angle < 120 && angle >= 90 && canplay9==true) {
        bigData.push({
          note: "gsharp",
        });
      } else if (angle < 90 && angle >= 60 && canplay10==true) {
        bigData.push({
          note: "dsharp",
        });
        canplay10=false;
        setTimeout(function(){ canplay10=true; }, 3000);
      } else if (angle < 60 && angle >= 30 && canplay11==true) {
        bigData.push({
          note: "bb",
        });
        canplay11=false;
        setTimeout(function(){ canplay11=true; }, 3000);
      } else if (angle < 30 && angle >= 0 && canplay12==true) {
        bigData.push({
          note: "f",
        });
        canplay12=false;
        setTimeout(function(){ canplay12==true; }, 3000);
      }
/////////////////////////////////////////////////////////////////////////

      //////////CIRCLE ROTATION////////////////////
      //$("body").html(data.do.alpha);
      $("#text").css( {"transform" : "rotate(-"+ angle +"deg)"} );
      //$("#circle").css( {"transform": "rotate("+ circleAngle +"deg)"} );
  });
  }).catch(function(e){
    console.log("device orientation not supported");
  });
  });
