var alphabet = "abcdefghijklmnopqrstuvwxyz ";
var array_GCD_Z_27 = [
    2, 4, 5, 7, 8, 10,
    11, 13, 14, 16, 17, 19, 20,
    22, 23, 25
];
var array_NghichDao_Z_27 = {
    '2': 14,
    '4': 7,
    '5': 11,
    '7': 4,
    '8': 17,
    '10': 19,
    '11': 5,
    '13': 25,
    '14': 2,
    '16': 22,
    '17': 8,
    '19': 10,
    '20': 23,
    '22': 16,
    '23': 20,
    '25': 13,
}
var indexAlPhaBet = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
    ' ': 26
}

function GCD(a, b) {
    let t;
    while (b != 0) {
        t = Math.floor(a % b);
        a = b;
        b = t;
    }
    return a;
}

function nghichDao(a, b) {
    let tem;
    if (a < b) {
        tem = a;
        a = b;
        b = tem;
    }
    let x2 = 1,
        x1 = 0,
        y2 = 0,
        y1 = 1,
        q, r, x, y;
    while (b > 0) {
        q = Math.floor(a / b);
        r = a - q * b;
        x = x2 - q * x1;
        y = y2 - q * y1;
        a = b;
        b = r;
        x2 = x1;
        x1 = x;
        y2 = y1;
        y1 = y;
    }
    if (y2 < 0) {
        return y1 + y2;
    }
    return y2;
}


//𝑎^𝑥 mod N
function modexp(a, x, n) {
    var r = 1;

    while (x > 0) {
        if (x % 2 == 1) {
            r = (r * a) % n;
        } /*x is odd?*/

        a = (a * a) % n
        x = Math.floor(x / 2);
    }
    return r;
}