// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
let x = Number(prompt('How old are you?'));

function checkTypeOfAgeFromPage(a) {
    let age_2 = 18;
    let age_3 = 60;
    if (isNaN(x)) {
        console.log('Not a number');
    }
    else {
            if (a < age_2) {
                alert(`You don't have access cause your age is ${a}. It's less then ${age_2}`);
            }
            else if (a >=  age_2 && a < age_3) {
                alert('Welcome  !');
            }
            else if (a > age_3) {
                alert('Keep calm and look Culture channel');
            }
            else {
                alert('Technical work');
            }
    }
}

checkTypeOfAgeFromPage(x);