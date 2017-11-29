

<<<<<<< HEAD
function forLoop(arr) {

  for (var i = 0; i < 25; i++) {
    if (1===1){
      arr.push(`I am 1 strange loops` );
  } else{
    arr.push(`I am $i strange loops`);
  }
}
return arr;
}


function whileLoop(countdown){

  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){

  do {
    array=array.pop
  } while (array.length > 0 && maybeTrue())
  return array
}
=======
function forLoop() {
  for (var i = 0; i < 25; i++) {
    console.log(`I am ${i} strange loops` );
  }
}
>>>>>>> 55fe09311b66200fe40018cd01c297d8044cfa99
