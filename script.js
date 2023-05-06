const lines = 5;
let result = '';
let stars = 1;
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' '
    }
    for (let j = 0; j < stars; j++) {
        result += '*'
    }
    stars += 2
    result += `\n`
}

console.log(result)


