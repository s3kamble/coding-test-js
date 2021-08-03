/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
 var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if ( hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
  };
  
const rgbToHexConversion = (...rgbValues) => {
    let hexCode="#";
    if(rgbValues.length <= 3){
       let resultArray=rgbValues.forEach((value)=>{
           if(Number.isInteger(value) && value <= 255){              
            
            var color = rgbToHex(value);
            hexCode+=color;
           }
           else{
               throw new Error("Invalid Input");
           }
       });

    }
    else{
        throw new Error("Invalid Input");
    }
    return hexCode;

     


};

module.exports = rgbToHexConversion;
