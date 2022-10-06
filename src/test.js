function largestOfFour(arr) {
    let result = [];
    

    for (let i =0;i<arr.length;i++) {
      result.push(Math.max(...arr[i]))
    }
  
    return result;
  }
  
  console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [-1000000, -1001, -857, -1]]));