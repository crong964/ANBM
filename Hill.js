var alphabet = "abcdefghijklmnopqrstuvwxyz";

function MaTrix2(stringKey) {
    this.a = indexAlPhaBet[stringKey[0]];
    this.b = indexAlPhaBet[stringKey[1]];
    this.c = indexAlPhaBet[stringKey[2]];
    this.d = indexAlPhaBet[stringKey[3]];


    this.ngichDao = () => {
        debugger
        let temp = 0;
        let deta = Math.floor((this.a * this.d - this.b * this.c) % alphabet.length);

        deta = nghichDao(deta, alphabet.length);

        temp = this.a;
        this.a = this.d;
        this.d = temp;

        this.b *= (-1);
        this.c *= (-1);

        this.a = Math.floor(this.a * deta % alphabet.length);
        this.b = Math.floor(this.b * deta % alphabet.length);
        this.c = Math.floor(this.c * deta % alphabet.length);
        this.d = Math.floor(this.d * deta % alphabet.length);

        this.a = this.a < 0 ? alphabet.length + this.a : this.a;
        this.b = this.b < 0 ? alphabet.length + this.b : this.b;
        this.c = this.c < 0 ? alphabet.length + this.c : this.c;
        this.d = this.d < 0 ? alphabet.length + this.d : this.d;
    }
    this.maHoaHillString2 = (string2Char) => {
        debugger
        let i = 0;;
        let stringMa = "";
        if (string2Char.length == 2) {
            i = Math.floor(
                (indexAlPhaBet[string2Char[0]] * this.a + indexAlPhaBet[string2Char[1]] * this.c) % alphabet.length
            )
            stringMa += alphabet[i];
            i = Math.floor(
                (indexAlPhaBet[string2Char[0]] * this.b + indexAlPhaBet[string2Char[1]] * this.d) % alphabet.length
            )
            stringMa += alphabet[i];
        } else {
            i = Math.floor((indexAlPhaBet[string2Char[0]] * this.a + 0 * this.c) % alphabet.length);
            stringMa += alphabet[i];
        }
        return stringMa;
    }
}


function chuoiMaHoaHill(string, stringKey) {
    let maTrix2 = new MaTrix2(stringKey);
    let stringMaHoa = "";


    let i = 0
    while (i < string.length) {

        if (string[i] && string[i + 1]) {
            stringMaHoa += maTrix2.maHoaHillString2(string[i] + string[i + 1])
        } else {
            stringMaHoa += maTrix2.maHoaHillString2(string[i])
        }

        i += 2;
    }
    return stringMaHoa;
}


function chuoiGiaiMaHill(string, stringKey) {
    let maTrix2 = new MaTrix2(stringKey);
    let stringMaHoa = "";
    maTrix2.ngichDao();
    let i = 0
    while (i < string.length) {

        if (string[i] && string[i + 1]) {
            stringMaHoa += maTrix2.maHoaHillString2(string[i] + string[i + 1])
        } else {
            stringMaHoa += maTrix2.maHoaHillString2(string[i])
        }

        i += 2;
    }
    return stringMaHoa;
}