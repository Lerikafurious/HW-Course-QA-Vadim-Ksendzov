// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
for (let i = 1; i <= 10; i++) {
    console.log(2**i)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
const gradeCalc = function(n) {
    if (!isNaN(+n) ) {
        for (let i = 1; i <= n; i++) {
            console.log(2**i)
        }
    } else {console.log('Not a number')}
}
gradeCalc(10)
gradeCalc('5')
gradeCalc('aaa')
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
let a = ':)'
for (let i = 1; i <= 5; i++) {
    console.log(a.repeat(i))
}


let a = ":)"
for (let i = 1; i <= 5; i++) {
    result = new Array(i + 1).join(a)
    console.log(result)
    }

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
const printPepeat = function(a, n) {
    if (!isNaN(+n) ) {
        for (let i = 1; i <= n; i++) {
            console.log(String(a).repeat(i))
        }
    } else {console.log('Not a number')}
}
printPepeat('*', 4)
printPepeat('¯\_(ツ)_/¯', 10)
printPepeat(5, 4)

const printNoPepeat = function(a, n) {
    let st = ''
    if (!isNaN(+n) ) {
        for (let i = 1; i <= n; i++) {
            st = st + String(a)
            console.log(st)
        }
    } else {console.log('Not a number')}
}
printNoPepeat('*', 4)
printNoPepeat('¯\_(ツ)_/¯', 10)
printNoPepeat(5, 4)
// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
const vowelsInWord = function(word) {
    let vowels = 0
    let notVowels = 0
    let lowerWord = word.toLowerCase()

    for (let i = 0; i < String(lowerWord).length; i++) {
        if ('aeiouy'.includes(String(lowerWord)[i])) {
            vowels+= 1
        } else if ('bcdfghjklmnpqrstvwxz'.includes(String(lowerWord)[i])) {
            notVowels+= 1
        }
    }
    console.log('Слово ' + word + ' состоит из ' + vowels + ' гласных и ' + notVowels + ' согласных букв')
} 
vowelsInWord('sad')
vowelsInWord('saDverysad3times')
vowelsInWord('case')
vowelsInWord('Case')
vowelsInWord('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

const ifPalindrom = function(word) {
    let yeyes = 0
    let a = String(word).toLowerCase()
    for (let i = 0; i < a.length; i++) {
        // console.log(a[i])
        // console.log(a[a.length - i - 1]) 
        if (a[i] == a[a.length - i - 1]) {
            // console.log('yes')
            yeyes += 1
        } else {
            console.log(word, 'is not a palindrome')
            break           
        }
    }
    if (yeyes == word.length) {
        console.log(word, 'is a palindrome')
    }
    }
ifPalindrom('abba')    
ifPalindrom('notabba')    
ifPalindrom('ab55ba')    
ifPalindrom('ab57545ba') 
ifPalindrom('aBba')    

//         



// }