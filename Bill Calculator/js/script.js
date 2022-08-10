const inputAmount = document.getElementById('input1');
const tipInput = document.getElementById('input2');
let totalAmountSpan = document.querySelector('.total-amount');
const btn = document.querySelectorAll('.btn');
const numberOfPeopleDisplay = document.querySelector('.no-people')

let numberOfPeople = 1;



const plus = () => {
    if (numberOfPeople > 0) {

        numberOfPeople += 1;
    }
    totalFunction()
    numberOfPeopleDisplay.innerText = numberOfPeople

}



const minus = () => {
    if (numberOfPeople > 1) {

        numberOfPeople -= 1;
    }
    totalFunction()
    return numberOfPeopleDisplay.innerText = numberOfPeople


}


const totalFunction = () => {
    let amount = Number.parseInt(inputAmount.value)
    let tipAmount = (amount / 100) * Number.parseInt(tipInput.value)
    let totalAmount = amount + tipAmount
    if (isNaN(totalAmount)) {
        totalAmountSpan.innerText = 0
    }
    else {


        totalAmountSpan.innerText = (totalAmount / numberOfPeople).toFixed(2)
    }

}


inputAmount.oninput = totalFunction;
tipInput.oninput = totalFunction;

btn[0].onclick = plus;
btn[1].onclick = minus;





