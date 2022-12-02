function giaiPhuongTrinhBac2(a, b, c) {
    let x1, x2;
    let delta = b * b - 4 * a * c;
    if (a === 0) {
        if (b === 0) {
            return ('Phương trình vô nghiệm');
        } else {
            x1 = x2 = (-c) / b;
            return (`Phương trình có 1 nghiệm ${x1}`);
        }
    } else {
        if (delta == 0) {
            x1 = x2 = (-b) / 2 * a;
            return (`Phương trình có 1 nghiệm kép x1 = x2 = ${x1} `);
        } else if (delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return (`Phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2}`);
        } else {
            return ('Phương trình vô nghiệm');
        }
    }
}
console.log(giaiPhuongTrinhBac2(8, 12, -20));
console.log(giaiPhuongTrinhBac2(0, -1, 2));
console.log(giaiPhuongTrinhBac2(0, 0, 1));