const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando
  if(typeof(str) === "string"){
    if(direction == "right" || direction =="left"){
      if(direction=="left"){
        var left = str.substring(n, str.length) +
        str.substring(0, n);
        return left;
      }

      if(direction=="right"){
        var right = str.substring(str.length-n, str.length) +
        str.substring(0, str.length-n);
        return right;
      }
    }
    else{
      throw new Error("Invalid Direction");
    }
      
  }
  else{
    throw new Error("Invalid Input");
  }
     
  
      
  
  
};

module.exports = rotateString;
