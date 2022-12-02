let number = Number(prompt("Nhập vào số nguyên n"));
let number_arr = [1, 10, 99, 2, 8, 100, 4];
function isExisted(number, numberArray) {
    let position = numberArray.length;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === number) {
            position = i;
        }
    }
    if (position != numberArray.length ) {
        return true;
    } else return false;
}

document.write(`Giá trị ${number} có nằm trong mảng không? ${isExisted(number, number_arr)}`);