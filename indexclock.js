
function display_ct() {
  var x = new Date()
  var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
  x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
  document.getElementById('ct').innerHTML = x1;
  display_c();
   }