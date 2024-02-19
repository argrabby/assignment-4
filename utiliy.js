function BackgroundChange(card) {
    card.classList.remove('bg-slate-50');
    card.classList.add('bg-green-500');
}

function setDocument(valueOfSeat) {
    let tbody = document.getElementById('table-body');
    let tr = document.createElement('tr');
    let firstTd = document.createElement('td');
    firstTd.innerHTML = valueOfSeat;
    let secondTd = document.createElement('td');
    secondTd.innerHTML = "Economy";
    let thirdTd = document.createElement('td');
    thirdTd.innerHTML = "550";
    let seatPrize = parseFloat(thirdTd.innerHTML);
    tr.appendChild(firstTd);
    tr.appendChild(secondTd);
    tr.appendChild(thirdTd);
    tbody.appendChild(tr);
    return seatPrize;
}

function createTable(discountAmount) {
    let tbody = document.getElementById('table-body2');
    let tr = document.createElement('tr');
    tr.style.fontWeight = "bold";
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = "Discount";
    tr.appendChild(td1);
    td2.innerHTML = " ";
    tr.appendChild(td2);
    td3.innerHTML = "BDT " + discountAmount;
    tr.appendChild(td3);
    tbody.appendChild(tr);
}

