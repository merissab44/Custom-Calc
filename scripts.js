// grabs the HTML elements by the id
displayCal = document.querySelector('#display-calorie')
slcActivity = document.querySelector('#activity')
minutes = document.querySelector('#workout')
pounds = document.querySelector('#weight')
// converts the weight input from pounds to kiloGrams
function convertPounds(){
    const poundsVal = parseInt(pounds.value)
    kGrams = poundsVal * 0.45
    return kGrams
}
// takes the value from each input and calculate the calories burned
function calcCalories(){
    const slcActivityVal = parseInt(slcActivity.value)
    const minutesVal = parseInt(minutes.value)
    const calBurned = slcActivityVal * 3.5 * minutesVal * convertPounds() / 200

    displayCal.innerHTML = calBurned
    console.log(calBurned)
}
// listens for an input and then calculate the calories based on the input
slcActivity.addEventListener('input', calcCalories)
minutes.addEventListener('input', calcCalories)
pounds.addEventListener('input', calcCalories)