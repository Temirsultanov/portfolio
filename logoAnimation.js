let symbolsArray = ['m', 'u', 'h', 'a', '%', '#', '@', '?', '!','~', '$', '&'];
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
    if (logo.textContent.includes('muha') || logo.textContent.includes('muh@')) {
        let str = logo.textContent;
        setTimeout(() => {
            logo.textContent = str;
        }, 500);
        document.body.classList.add('black');
        window.removeEventListener('scroll', onWindowScroll)
    }
};
let onWindowScroll = function () {
    setTimeout(changeLogo, 500);
}
window.addEventListener('scroll', onWindowScroll);