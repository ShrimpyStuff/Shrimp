var count = 0;
var times = 1;

count = parseInt(window.localStorage.getItem('count'));

if (localStorage.getItem("count") == null) {
count = 0;
} else {
count = parseInt(window.localStorage.getItem('count'));
}

if (count == 0) {
  counter.innerHTML = "<h3>" + count + "</h3>";
}

add.onclick = function() {
if (count < 100) {
   times = 2;
   }
  count += times;
  counter.innerHTML = "<h3>" + count + "</h3>";
localStorage.setItem("count", count);
};
