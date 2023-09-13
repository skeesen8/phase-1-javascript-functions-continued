function saturdayFun(activity = "roller-skate") { 
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(wrap){
    return function(adjective){
      return `You are ${wrap}${adjective}${wrap}!`
    }
}
 console.log(wrapAdjective("%")("a dedicated programmer"))
