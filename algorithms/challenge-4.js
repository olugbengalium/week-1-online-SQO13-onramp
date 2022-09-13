function calculateGrade(marks) {
    let average=0
    let sum=0
    for (let i=0; i<marks.length; i++) {
        sum += marks[i]
    }
    average = sum / marks.length

    if (average < 50) {
        return "F"; 
    } else if (average > 49 && average < 60) {
        return "E"
    } else if ( average > 59 && average < 70 ) {
        return "D"
    } else if (average > 69 && average < 80) {
        return "c"
    } else if ( average > 79 && average < 90 ){
        return "B"
    } else return "A";

    }
  module.exports =calculateGrade
