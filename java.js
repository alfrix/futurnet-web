
/* THE OLD TARGET="_BLANK" */

window.onload = function() {
   if (!document.getElementsByTagName) return false;
   var links = document.getElementsByTagName("a");
   for (var i=0; i<links.length; i++) {
      if (links[i].getAttribute("rel") == "external") {
         links[i].onclick = function() {
            return !window.open(this.href);
         }
      }
   }
}
