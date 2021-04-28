;(function(){
    // Works
    let worksTitle = document.querySelector('.works__title');
    let worksCursor = document.querySelector('.works__cursor');
    worksCursor.style.height = worksTitle.getBoundingClientRect().height + 'px';
    worksTitle.style.opacity = 0;
    worksTitle.style.height = worksTitle.getBoundingClientRect().height + 'px';
    worksTitle.textContent = '';
    worksCursor.style.transform = 'translateX(0px)';
    let workSymbols = ['Р', 'а', 'б', 'о', 'т', 'ы'];

    // Contacts
    let contactsTitle = document.querySelector('.contacts__title');
    let contactsCursor = document.querySelector('.contacts__cursor');
    contactsCursor.style.height = contactsTitle.getBoundingClientRect().height + 'px';
    contactsTitle.style.opacity = 0;
    contactsTitle.style.height = contactsTitle.getBoundingClientRect().height + 'px';
    contactsTitle.textContent = '';
    contactsCursor.style.transform = 'translateX(0px)';
    let contactSymbols = ['К', 'о', 'н', 'т', 'а', 'к', 'т', 'ы'];


    // Function
    let cursorAnimation = function (minTime, maxTime, index,  symbolElem, symbols, cursor) {
        if (index === symbols.length) {
            return;
        }
        maxTime = maxTime - minTime;
        let randomTime = Math.floor(Math.random() * maxTime + minTime);
        setTimeout( () => {
            if (index === 0) {
                symbolElem.style.opacity = 1;
                symbolElem.textContent = '';
            }
            symbolElem.textContent += symbols[index];
            cursor.style.transform = `translateX(${symbolElem.getBoundingClientRect().width}px)`
            cursorAnimation(minTime, minTime + maxTime, index + 1, symbolElem, symbols, cursor);
        }, randomTime);
    }
    window.addEventListener('resize', function(){
        worksCursor.style.transform = `translateX(${worksTitle.getBoundingClientRect().width}px)`
        worksCursor.style.height = worksTitle.getBoundingClientRect().height + 'px';

        contactsCursor.style.transform = `translateX(${contactsTitle.getBoundingClientRect().width}px)`
        contactsCursor.style.height = contactsTitle.getBoundingClientRect().height + 'px';
    })
    window.addEventListener('scroll', function () {
        if (worksTitle.getBoundingClientRect().top - window.innerHeight < -100) {
            if (!worksTitle.classList.contains('cursor-animated')) {
                worksTitle.classList.add('cursor-animated');
                cursorAnimation(200, 400, 0, worksTitle, workSymbols, worksCursor);
            }
            
        }
        if (contactsTitle.getBoundingClientRect().top - window.innerHeight < -100) {
            if (!contactsTitle.classList.contains('cursor-animated')) {
                contactsTitle.classList.add('cursor-animated');
                cursorAnimation(200, 400, 0, contactsTitle, contactSymbols, contactsCursor);
            }
        }
    })
})()