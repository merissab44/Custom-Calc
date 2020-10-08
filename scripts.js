
displayCal = document.querySelector('#display-calorie')
slcActivity = document.querySelector('#activity')
minutes = document.querySelector('#workout')
pounds = document.querySelector('#weight')

function convertPounds(){
    const poundsVal = parseInt(pounds.value)
    kGrams = poundsVal * 0.45
    return kGrams
}
function calcCalories(){
    const slcActivityVal = parseInt(slcActivity.value)
    const minutesVal = parseInt(minutes.value)
    const calBurned = slcActivityVal * 3.5 * minutesVal * convertPounds() / 200

    displayCal.innerHTML = calBurned
    console.log(calBurned)
}

slcActivity.addEventListener('input', calcCalories)
minutes.addEventListener('input', calcCalories)
pounds.addEventListener('input', calcCalories)