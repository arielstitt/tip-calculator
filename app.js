//as a user i want to be able to choose between 18%, 20%, and 25%
//as a user I want to be able to put in my total, # guest, and quality of service
//as a user I want to see individual tip amount 

//get the total amount

let calculate = document.getElementById('calculate');
calculate.addEventListener('click', calculateTip);

function calculateTip() {
    //number of guests
    let numGuests = document.getElementById('numGuests').value;
    //total
    let total = Number(document.getElementById('total').value);
    //percentage selection
    let eighteen = document.getElementById('eighteen');
    let twenty = document.getElementById('twenty');
    let twentyFive = document.getElementById('twenty-five');
    //tip
    let tip = 0;
    //add total to the document
    let span = document.getElementById('tip'); 
    //calculate based on tip percent
    if (eighteen.checked) {
        tip = total * Number(eighteen.value);
        span.innerHTML = tip / numGuests
    } else if (twenty.checked) {
        tip = total * Number(twenty.value);
        span.innerHTML = tip / numGuests
    } else if (twentyFive.checked) {
        tip = total * Number(twentyFive.value);
        span.innerHTML = tip / numGuests
    } else (
        alert('please select tip amount!')
    )

    //n
}