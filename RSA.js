class RSA {
    constructor() {
        this.phi = 0;
        this.n = 0;
        this.e = 0;
        this.d = 0;
    }
    set(e, d, n) {
        this.n = n;
        this.e = e;
        this.d = d;
    }
    jsonRSA() {
        return { phi: this.phi, n: this.n, e: this.e, d: this.d }
    }
    arrayPrime() {
        return [2, 3, 5, 7, 11, 13, 17, 19, 23,
            29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
            131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
            197, 199, 211, 223, 227, 229, 233,
            239,
            241,
            251,
            257,
            263,
            269,
            271,
            277,
            281,
            283,
            293,
            307,
            311,
            313,
            317,
            331,
            337,
            347,
            349,
            353,
            359,
            367,
            373,
            379,
            383,
            389,
            397,
            401,
            409,
            419,
            421,
            431,
            433,
            439,
            443,
            449,
            457,
            461,
            463,
            467,
            479,
            487,
            491,
            499,
            503,
            509,
            521,
            523,
            541,
            547,
            557,
            563,
            569,
            571,
            577,
            587,
            593,
            599,
        ];
    }
    isPrime(params) {
        var num = parseInt(params);
        if (num < 2) {
            return false;
        }
        var s = Math.sqrt(num);
        for (let i = 2; i <= s; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }


    CreatePhiAndN() {
        let array = [];
        array = array.concat(this.arrayPrime());
        let index = 0;
        let n = 1;
        let phi = 1;
        for (let i = 0; i < 5; i++) {
            index = parseInt(Math.random() * 1000) % array.length;
            n = n * array[index];
            phi = (array[index] - 1) * phi;
            array.splice(index, 1);
        }
        this.phi = phi;
        this.n = n;
        return this;
    }

    GCD(a, b) {
        let t;
        while (b != 0) {
            t = Math.floor(a % b);
            a = b;
            b = t;
        }
        return a;
    }

    nghichDao(a, b) {
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
        //r=𝑎^𝑥 mod N -- C=M^e mod N -- M=C^d mod N
    Modexp(a, x, n) {
        a = BigInt(a);
        x = BigInt(x);
        n = BigInt(n);
        var r = BigInt(1);

        while (x > 0) {
            if (x % BigInt(2) == 1) {
                r = (r * a) % n;
            } /*x is odd?*/

            a = (a * a) % n
            x = x / BigInt(2);
        }
        return parseInt(r);
    }
    EncryMess(M) {
        return this.Modexp(M, this.e, this.n);
    }
    DeEncryMess(C) {
        return this.Modexp(C, this.d, this.n);
    }
    CreateEKey() {
        var st = [];
        var nst = parseInt(Math.sqrt(this.phi));
        console.log(nst);
        nst = nst > 903188 ? 900000 : nst;
        console.log(nst);
        for (let i = 2; i < this.phi; i++) {
            if (this.GCD(this.phi, i) == 1) {
                st.push(i);
                if (st.length == nst) {
                    break;
                }
            }
        }
        this.e = st[parseInt(Math.random() * this.phi % st.length)];
        return this;
    }
    CreateDKey() {
        this.d = this.nghichDao(this.e, this.phi);
        return this
    }
    CreateKey() {
        this.CreatePhiAndN();
        this.CreateEKey();
        this.CreateDKey();
        return this
    }
    EncryString(s) {
        var sE = [];
        var t = ""
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            sE.push(this.EncryMess(s.charCodeAt(i)));
        }
        return sE.toString();
    }
    DeEncryString(s) {
        var sE = s.split(",");
        var strin = "";
        for (let i = 0; i < sE.length; i++) {

            strin += String.fromCharCode(this.DeEncryMess(sE[i]));
        }
        return strin;
    }

}