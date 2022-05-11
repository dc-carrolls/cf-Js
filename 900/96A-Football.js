var players = readline();
var i = 1;
var count = 1;
var maxCount = 1;  
var cp = players[0];  
var l = players.length;  
while ((i < l) && (maxCount < 7))  {
  if (cp == players[i]){
    count++;
    if (count > maxCount){
      maxCount = count;
    }
  } else {
    cp = players[i];
    count = 1;
  }
  i++;
}
if (maxCount > 6) {
  print("YES");
} else {
  print("NO");
}

