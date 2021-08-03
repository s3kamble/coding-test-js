/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
   if(isNaN(str)){
    
     let countingA=0,countingE=0,countingI=0,countingO=0,countingU=0;
     
     for(let char=0;char < str.length ; char++){
         if (str.charAt(char) == "a" || str.charAt(char) == "A" ) 
         {
            countingA++;
         }
         else if (str.charAt(char) == "e" || str.charAt(char) == "E" ){
            countingE++;
         }
         else if (str.charAt(char) == "i" || str.charAt(char) == "I" ){
            countingI++;
         }
         else if (str.charAt(char) == "o" || str.charAt(char) == "O" ){
            countingO++;
         }
         else if (str.charAt(char) == "u" || str.charAt(char) == "U" ){
            countingU++;
         }

     }
     return {a:countingA,e:countingE,i:countingI,o:countingO,u:countingU};

   }
   else{
      throw new Error("Invalid Input");
   }
};

module.exports = frequencyCounter;
