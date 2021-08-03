/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
    if (!isNaN(seconds)){
        let hours = ~~( seconds / 3600) ;
        let minutes = ~~(( seconds % 3600) / 60);
        let second = ~~ seconds % 60 ;

        return { hours:hours, minutes:minutes, seconds:second};
    }
    else{
        throw new Error("Invalid Input");
    }
    
};

module.exports = convertTime;
