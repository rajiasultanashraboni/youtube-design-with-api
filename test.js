// function getTimeString(time) {
//     const year = Math.floor(time / (3600 * 24 * 365)); 
//     const remainingAfterYear = time % (3600 * 24 * 365); 

//     const day = Math.floor(remainingAfterYear / (3600 * 24)); 
//     const remainingAfterDay = remainingAfterYear % (3600 * 24); 

//     const hour = Math.floor(remainingAfterDay / 3600); 
//     const remainingSeconds = remainingAfterDay % 3600; 

//     const minute = Math.floor(remainingSeconds / 60); 
//     const second = remainingSeconds % 60; 

//     return `${year}y ${day}d ${hour}h ${minute}m ${second}s`; 
// }

// const result = getTimeString(25000000); 
// console.log(result);
