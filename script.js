let items = {
    'pizza': 1.2,
    'elephants': 5221,
    'feathers': 0.0000082,
    'butterflies': 0.0005,
    'balloons': 0.003,
    'jellybeans': 0.0011
}
function calculateWeight(uom) {
    let userWeight = document.getElementById('weight').value;
    let resultEl = document.getElementById('result');
    resultEl.innerText = "Loading...."
    if(userWeight){
        let weightToDisplay = userWeight / items[uom];
        resultEl.innerText = "You Are " + weightToDisplay + " " + uom + " heavy!";    
    }else{
    resultEl.innerText = "Please Enter your weight"
    }
    
    console.log(weight, uom);
}
