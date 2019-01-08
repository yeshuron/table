
  $("#accessStatus").click(function(){
    $(".hideMeAcc").toggle();
  });

  $("#fbk").click(function(){
    $(".hideMeFb").toggle();
  });

  $("#Mnu1").hover(function(){
    $(".hideMeB").toggle();
  });



var table = document.getElementById("myTable");
var tr = table.getElementsByTagName("tr");

function myFunction() {
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  showMatchingCells(filter)
}

function clickFunction(event) {
   var filter = event.target.textContent.toUpperCase();
   showMatchingCells(filter);
}
[].slice.call(document.getElementsByClassName("filter-button"), 0).forEach(function(element) {
  element.onclick = clickFunction;
})
document.getElementById('clear-button').onclick = function() { showMatchingCells('');     
  $(".hideMeFb").hide();
    $(".hideMeAcc").hide();
  } 

function showMatchingCells(filter) {
    var txtValue, i, td;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("meta")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// function poppy() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }


function popupClick(event) {
  
  var popTarget = $(event.currentTarget).find(".myPopup");
  var isHidden =  popTarget.css("display") == "none"
  $(".myPopup").hide();
  if (isHidden) {
    popTarget.show(); 
  }
  else {
    popTarget.hide();
  }
 }
$('.popupBtn').on('click', popupClick)