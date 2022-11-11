const api = "https://api.adviceslip.com/advice";
const advice_txt = document.body.querySelector('#advice');
const advice_id = document.body.querySelector('#advice_id');

window.onload = () => {
    getAdvice();
}

function getAdvice() {
    try {
        fetch(api).then(response => {
            return response.json();
        }).then(advData => {
            const advObj = advData.slip;
            advice_txt.innerHTML = `${advObj.advice}`;
            advice_id.innerHTML = `${advObj.id}`;
        })
    } catch (err) {
        console.error(err);
    }
}