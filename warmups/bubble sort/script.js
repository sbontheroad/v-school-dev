var arr = [0, 20, -5, 100];
function bubbleSort(arr) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

bubbleSort(arr);
console.log(arr);

var bubble = function (arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var x = 0; x < arr.length; x++) {
      if(arr[i] < arr[x]) {
        var temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
      }
    }
  }
  console.log(arr);
}
bubble([1, 20, -90, 1000]);

//heap sort?