let oneCandy = 20;
let twoCandy = 20;
let oneChips = 15;

function firstCandy() {
    oneCandy = oneCandy - 1;

    if(oneCandy == 0) {
        document.getElementById('oneCandy').innerHTML = "Out of Stock";
        document.getElementById('btnoneCandy').disabled = true;
    }
    console.log(oneCandy);
}

function secondCandy() {
    twoCandy = twoCandy - 1;

    if(twoCandy == 0) {
        document.getElementById('twoCandy').innerHTML = "Out of Stock";
        document.getElementById('btntwoCandy').disabled = true;
    }
    console.log(twoCandy);
}

function firstChips() {
    oneChips = oneChips - 1;

    if(oneChips == 0) {
        document.getElementById('oneChips').innerHTML = "Out of Stock";
        document.getElementById('btnChips').disabled = true;
    }
    console.log(oneChips);
}

