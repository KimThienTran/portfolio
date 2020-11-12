//topnav vars
var list = document.querySelectorAll('.topnav a');
var listLen = document.querySelectorAll('.topnav a').length;

//SideNav vars
var listS = document.querySelectorAll('.SideNav a');
  //SideNav-a Colors
  var sidenav_a = 'grey';
  var sidenav_a_hover = 'dimgrey';
var test = document.querySelectorAll('.SideNav a:hover')
var listC = document.querySelectorAll('.Container');
var conY;
var eleY;
var listSLen = document.querySelectorAll('.SideNav a').length;
var winY;
var sideN = document.querySelector(".SideNav");
var conYs=[];
var flag = 0;


window.onscroll = function() {
  SideNav();
  topNav();

}

	function topNav() {


		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

			for (i = 0; i < listLen; i++) {
				document.querySelectorAll('.topnav a')[i].style.padding = "5px 5px";


			}

		} else {

			for (i = 0; i < listLen; i++) {
				document.querySelectorAll('.topnav a')[i].style.padding = "20px 20px";

			}


		}
	}
function SideNav() {

  if (document.body.classList.contains('Project')) {

      //get first position of container, to make side bar appear.
      conY = listC[0].getBoundingClientRect();
      winY = window.pageYOffset;
      eleY = conY.top + winY;

      var test = document.querySelector(".SideNav a:hover");


      //check to see if user passes first container top
      if (winY > (eleY-200)){
        sideN.style.left = "0px";
      }
      else {
        sideN.style.left = "-200px";

      }



      if (flag == 0){
      for (i = 0; i < listC.length; i++) {
        conYs.push((listC[i].getBoundingClientRect().top + winY)-400);;
      }
      flag=1;
    }

      if (winY > (conYs[0]) && winY < conYs[1] )
      {
        listS[0].style.backgroundColor = sidenav_a_hover;


      }
      else {
        listS[0].style.backgroundColor = sidenav_a;

      }

      if (winY > (conYs[1]) && winY < conYs[2])
      {
        listS[1].style.backgroundColor = sidenav_a_hover;

      }
      else {
        listS[1].style.backgroundColor = sidenav_a;

      }

      if (winY > (conYs[2]) && winY < conYs[3])
      {
        listS[2].style.backgroundColor = sidenav_a_hover;

      }
      else {
        listS[2].style.backgroundColor = sidenav_a;

      }

      if (winY > (conYs[3]))
      {
        listS[3].style.backgroundColor = sidenav_a_hover;

      }
      else {
        listS[3].style.backgroundColor = sidenav_a;

      }



  }
}
