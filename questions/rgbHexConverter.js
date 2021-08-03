/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
    
    var rgbToHex = function (rgb) { 
        var hex = Number(rgb).toString(16);
        if(Number.isInteger(hex) && hex <= 255){
            if ( hex.length < 2) {
                hex = "0" + hex;
           }
           return hex;
        }
        else{
            new Error("Invalid Input");
        }
        
      };

     
        var red = rgbToHex(rgbValues[0]);
        var green = rgbToHex(rgbValues[1]);
        var blue = rgbToHex(rgbValues[2]);
        return red+green+blue;
     


};

module.exports = rgbToHexConversion;
