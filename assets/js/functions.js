const api = "https://api.adviceslip.com/advice";
const advice_txt = document.body.querySelector('#advice');
const advice_id = document.body.querySelector('#advice_id');

window.onload = () => {
    getAdvice();
}

const playAnimation = () => {
    $(".btn-dice").toggleClass("animation");
}

const fetchAdvice = async () => {
    fetch(api).then(response => {
        return response.json();
    }).then(advData => {
        const advObj = advData.slip;
        advice_id.innerHTML = `ADVICE #${advObj.id}`;
        advice_txt.innerHTML = `“${advObj.advice}”`;
    })
}

const getAdvice = () => {
    try {
        const loadFetch = async () => {
            playAnimation();
            advice_id.innerHTML = ``;
            advice_txt.innerHTML = `Loading...`;
            setTimeout(async () => {
                await fetchAdvice().then(() => {
                    playAnimation();
                });
            }, 1000);
        }
        loadFetch();
    } catch (err) {
        console.error(err);
    }
}
