let items = {
    'pizza': 1.2,
    'elephants': 5221,
    'formula1': 798,
    'rabbits': 1.2,
    'vaccum cleaners': 6,
    'mobile phones': 0.14,
    'water melons': 16,
    'drums': 29,
    'pillows': 2
}
function calculateWeight(uom) {
    let userWeight = document.getElementById('weight').value;
    let resultEl = document.getElementById('result');
    resultEl.innerText = "Loading...."
    if (userWeight) {
        let weightToDisplay = userWeight / items[uom];
        weightToDisplay = weightToDisplay.toFixed(2);
        resultEl.innerText = "You Are " + weightToDisplay + " " + uom + " heavy!";
    } else {
        resultEl.innerText = "Please Enter your weight"
    }

    console.log(weight, uom);
}
