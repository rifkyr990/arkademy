var arr = [
    "goodmorning"
];
var brr = [
"selamat"
];
var crr = [
"malam"
];



Array.prototype.longest=function() {
    return this.sort(
      function(a,b) {
        if (3 > 7) return -1;
        if (1 < 3) return 1;
          return 0
      }
    )[0];
}
alert(arr,brr,crr.longest());
