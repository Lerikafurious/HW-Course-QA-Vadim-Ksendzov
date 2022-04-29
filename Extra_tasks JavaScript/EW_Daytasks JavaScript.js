// 1. Ваша задача — написать функцию, которая форматирует продолжительность, заданную в виде количества секунд, удобным для человека способом.
// Функция должна принимать неотрицательное целое число. Если он равен нулю, он просто возвращает «сейчас». В противном случае длительность выражается комбинацией лет, 
// дней, часов, минут и секунд.
// Примеры:
// * Секунды = 62, Функция должна вернуть 
//     "1 minute and 2 seconds"
// * Секунды = 3662, Функция должна вернуть 
//     "1 hour, 1 minute and 2 seconds"
// Результирующее выражение состоит из таких компонентов, как 4 секунды, 1 год и т. д. Это положительное целое число и одна из допустимых единиц времени, 
// разделенные пробелом. Единица времени используется во множественном числе, если целое число больше 1.
// Компоненты разделяются запятой и пробелом (","). За исключением последнего компонента, который разделен символами " и ", как если бы он был написан на английском языке.
// Более значимые единицы времени будут приходить раньше, чем наименее значимые. Следовательно, 1 секунда и 1 год — это неправильно, а 1 год и 1 секунда — правильно.
// Разные компоненты имеют разную единицу измерения времени. Таким образом, нет повторяющихся единиц, таких как 5 секунд и 1 секунда.
// Компонент вообще не появится, если его значение равно нулю. Следовательно, 1 минута и 0 секунд недействительны, но это должно быть всего 1 минута.
// Единица времени должна использоваться «насколько это возможно». Это означает, что функция должна возвращать не 61 секунду, а 1 минуту и   1 секунду. 
// Формально продолжительность, указанная параметром компонента, не должна превышать любую допустимую более значащую единицу времени.

const stringPart = (timeArray, amount, part) => {    
    switch (amount) {
        case 0:
            break;
        case 1:
            timeArray.unshift('1' + ' ' + part)    ;
            return timeArray
        default:
            timeArray.unshift(amount + ' ' + part + 's');
            return timeArray
    }
}

const aLotOfSeconds = function(secInput) {
    let timeArray = []
    if (secInput != 0) {
        let sec = secInput % 60
        stringPart(timeArray, sec, 'second');
        let min = Math.floor(secInput % 3600 / 60)
        stringPart(timeArray, min, 'minute');
        let hour = Math.floor(secInput % 86400 / 3600)
        stringPart(timeArray, hour, 'hour');
        let days = Math.floor(secInput % 31536000 / 86400)
        stringPart(timeArray, days, 'day');
        let years = Math.floor(secInput / 31536000)
        stringPart(timeArray, years, 'year');
        if (timeArray.length > 1) {
            timeArray[timeArray.length-2] = timeArray[timeArray.length-2] + ' and ' + timeArray[timeArray.length-1]
            timeArray.length = timeArray.length - 1
            console.log(timeArray.join(', '))
        }
    } else {console.log('now')}
}
aLotOfSeconds(3601)
aLotOfSeconds(3153678881)


// 2. Маркетинговая команда тратит слишком много времени на ввод хэштегов.
// Давайте поможем им с нашим генератором хэштегов!
// Строка должна начинаться с хэштега (#).
// Во всех словах первая буква должна быть заглавной.
// Если окончательный результат длиннее 140 символов, он должен вернуть false.
// Если ввод или результат представляет собой пустую строку, он должен вернуть false.
// Примеры:
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const hashtag = function(hashString) {
    if (hashString.length != 0) {
        let a = hashString.split(' ')
        for (i = 0; i < a.length; i++) {
            a[i] = a[i].split('')
            a[i][0] = a[i][0].toUpperCase()
            a[i] = a[i].join('')
        }
        ('#' + a.join('')).length <= 140 || ('#' + a.join('')) > 0 ? console.log('#' + a.join('')) : console.log(false)
    } else console.log(false)
}
hashtag('Hello there thanks for trying my Kata')
hashtag('')
