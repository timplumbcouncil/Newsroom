function clearDates(){

  $("#txtDateFrom").val("")
  $("#txtDateTo").val("")

}

function close_accordion_section() {
  $(".accordion .accordion-section-title").removeClass("active");
  $(".accordion .accordion-section-content").slideUp(300).removeClass("open");
  $(".plus").html("+")
}
 
$(".accordion-section-title").click(function(e) {

  var currentAttrValue = $(this).attr("href");

  console.log(currentAttrValue)
 
  if($(e.target).is(".active")) {

    close_accordion_section();

  }else {
    console.log(this)
    close_accordion_section();
    $(this).addClass("active");
    $(".accordion " + currentAttrValue).slideDown(300).addClass("open"); 
    $("." + e.delegateTarget.classList[1] + " .plus").html("-")

   }
  
  e.preventDefault();
});

function initiateAccordian(){
  $(".accordion  #accordion-1").slideDown(300).addClass("open");
  $(".ac1 .plus").html("-")

}

$( document ).ready(function() {
    initiateAccordian()
});

    