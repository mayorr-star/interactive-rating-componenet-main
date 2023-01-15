const ratingPage = document.getElementById('section-1');
const thankYouPage = document.getElementById('section-2');
const submitButton = document.getElementById('submit');
const ratings = document.querySelectorAll('.btn');
const rateNum = document.getElementById('slop');

submitButton.addEventListener('click', () => {
    ratingPage.style.display = 'none'
    thankYouPage.style.display = 'block'
});

ratings.forEach((rate) => {
    rate.addEventListener('click', () => {
        rateNum.innerHTML = rate.innerHTML ; 
    })
});

