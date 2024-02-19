let Cards = document.querySelectorAll('#card');
let discountBtn = document.getElementById('discount-btn');
discountBtn.disabled = true;
let nextPurBtn = document.getElementById('purchase-btn');
nextPurBtn.disabled = true;
let setCheckArray = [];
let count = 0;
let totalAmount = 0;
let seatAccessCount = 0;

// Event listener for seat selection
for (let card of Cards) {
    card.addEventListener('click', () => {
        if (seatAccessCount == 0) {
            let valueOfSeat = card.childNodes[1].innerHTML;
            if (setCheckArray.includes(valueOfSeat)) {
                alert('Seat already selected');
            } else {
                if (count < 4) {
                    if (count == 3) {
                        discountBtn.disabled = false;
                    }
                    BackgroundChange(card);
                    let totalSet = document.getElementById('totalSetCount');
                    let totalSetValue = parseInt(document.getElementById('totalSetCount').innerHTML);
                    totalSet.innerHTML = totalSetValue - 1;
                    setCheckArray.push(valueOfSeat);
                    let setCounter = document.getElementById('seat-Count');
                    let setCounterValue = parseInt(setCounter.innerHTML);
                    setCounter.innerHTML = setCounterValue + 1;
                    count++;
                    let setPrize = setDocument(valueOfSeat);
                    totalAmount += setPrize;
                    document.getElementById('Total-Amount').innerHTML = totalAmount;
                    document.getElementById('amount-first').innerHTML = totalAmount;
                } else {
                    alert('You have already booked 4 seats');
                }
            }
        } else {
            alert("Please Confirm the Order");
        }
    });
}

// Function to apply coupon
function applyCoupon() {
    let disInput = document.getElementById('coupne-input');
    let disInputValue = disInput.value;
    if (disInputValue === "NEW15" || disInputValue === "NEW20") {
        let AmountPlace = document.getElementById('Total-Amount');
        let Amount = parseInt(document.getElementById('Total-Amount').innerHTML);
        let discountAmount = (disInputValue === "NEW15") ? (Amount * 15) / 100 : (Amount * 20) / 100;
        let netAmount = Amount - discountAmount;
        AmountPlace.innerHTML = netAmount;
        // Create table based on discount
        if (disInputValue === "NEW15") {
            createTable(discountAmount);
        } else {
            createTable2(discountAmount);
        }
        disInput.value = "";
        discountBtn.disabled = true;
    } else {
        alert('Please Enter A Valid Coupon');
        disInput.value = "";
    }
    // Increment counter for coupon usage
    CopneCount++;
    // Increment counter for applying coupon
    seatAccessCount++;
}

// Event listener for email input
let Email = document.getElementById('passengerEmail');
Email.addEventListener('keyup', (event) => {
    if (event.key) {
        if (count > 0) {
            nextPurBtn.disabled = false;
        }
    }
});

// Function for successful booking
function success() {
    let fullBody = document.getElementById('hidden');
    fullBody.classList.add('hidden');
    let successModal = document.getElementById('Success-section');
    successModal.classList.remove('hidden');
}

// Function to continue after successful booking
function Countinue() {
    let fullBody = document.getElementById('hidden');
    fullBody.classList.remove('hidden');
    let successModal = document.getElementById('Success-section');
    successModal.classList.add('hidden');
    location.reload();
}
