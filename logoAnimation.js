let symbolsArray = ['m', 'u', 'h', 'a', '%', '#', '@', '?', '!','~', '$', '&'];
let destroying = document.querySelectorAll('.work, .mainscreen__photo, h1,h2,h3,h4,h5,h6, .cursor, .portfolio__footer');
let logo = document.querySelector('.logo b');
let getRandom = function (maxValue) {
    return Math.floor( Math.random() * maxValue );
}
let changeLogo = function () {
    logo.textContent = '';
    for (let i = 0; i < 5; i++) {
        let randomNumber = getRandom(symbolsArray.length);
        logo.textContent += symbolsArray[randomNumber];
    }
    if (logo.textContent.includes('mu') || logo.textContent.includes('muh@')) {
        let str = logo.textContent;
        setTimeout(() => {
            logo.textContent = str;
        }, 500);
        document.body.style.height = document.body.getBoundingClientRect().height + 'px';
        document.body.classList.add('destroy');
        window.removeEventListener('scroll', onWindowScroll)
        destroying.forEach(title => {
            let randomDeg = getRandom(360);
            title.position = 'absolute';
            title.style.transition = 'transform 5s ease-in, color 0s';
            title.style.transform = `translateY(5000px) rotate(${randomDeg}deg)`
        });
    }
};
let onWindowScroll = function () {
    setTimeout(changeLogo, 500);
}
window.addEventListener('scroll', onWindowScroll);
