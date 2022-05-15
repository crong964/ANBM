function kyTuMaHoaApphin(aKey, bKey, char) {
    let nChar = indexAlPhaBet[char];
    nChar = Math.floor((aKey * nChar + bKey) % alphabet.length);
    return alphabet[nChar];
}

function chuoiMaHoaApphin(aKey, bKey, string) {
    let stringApphin = "";

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        stringApphin += kyTuMaHoaApphin(aKey, bKey, element);
    }

    return stringApphin;
}

function kyTuGiaiMaApphin(aKey_Nghich, bKey, char) {
    let nChar = indexAlPhaBet[char];
    nChar = Math.floor(aKey_Nghich * (nChar - bKey) % alphabet.length);
    if (nChar < 0) {
        nChar = alphabet.length + nChar;
    }
    return alphabet[nChar];
}

function chuoiGiaiMaApphin(aKey_Nghich, bKey, string) {
    let stringApphin = "";

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        stringApphin += kyTuGiaiMaApphin(aKey_Nghich, bKey, element);
    }
    return stringApphin;
}

function renderKeyApphinRandom() {
    var stringKey = "";
    let aKey = Math.floor(Math.random() * 100 % array_GCD_Z_27.length); // lấy vị trí ngẫu nhiên trong vành z27 có GCD() với 27 =1
    let aKey_Nghich = array_NghichDao_Z_27[array_GCD_Z_27[aKey]]; // lấy giá trị nghich đảo của array_GCD_Z_27[aKey]  trong mảng array_NghichDao_Z_27
    let bKey = Math.floor(Math.random() * 100 % alphabet.length);

    stringKey = alphabet[array_GCD_Z_27[aKey]] + alphabet[bKey] + alphabet[aKey_Nghich];
    console.log(`${array_GCD_Z_27[aKey]} ${bKey}  ${aKey_Nghich}`);
    return stringKey;
}

function convertCharToNumber(stringKey) {
    if (stringKey.length != 3) {
        return undefined;
    }
    return new keyApphin(indexAlPhaBet[stringKey[0]], indexAlPhaBet[stringKey[1]], indexAlPhaBet[stringKey[2]])
}

function keyApphin(akey, bKey, aKey_Nghich) {
    this.aKey = akey;
    this.bKey = bKey;
    this.aKey_Nghich = aKey_Nghich;
}

function isKeyApphin(stringKeyApphin) {
    let key = convertCharToNumber(stringKeyApphin);
    if (key == undefined) {
        return false;
    }
    if (GCD(key.aKey, alphabet.length) != 1) {
        return false;
    }

    if (Math.floor(key.aKey * key.aKey_Nghich % alphabet.length) != 1) {
        return false;
    }
    return true;
}