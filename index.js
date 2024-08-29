




function button(ok) {
    var ad=$(".text").val();
    $(".text").val(ok+ad)
}

function tan() {
    $(".text").val('');
}

function calculet() {
    
   var hh= eval($(".text").val())
   $(".text").val(hh)
   
   
}

function Del() {
   var del= $(".text").val()
   if (del!='') {
       $(".text").val(del.slice(0,-1));
   }
}
/*
$("h1").text("tata") document.querySelector("h1").innerHTML="OK"; */
