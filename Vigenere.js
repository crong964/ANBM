function kyTuMaHoaVigere(char, keyChar) {
    let charI = parseInt(indexAlPhaBet[char]);
    let keyCharI = parseInt(indexAlPhaBet[keyChar])
    let keyCharIn = charI + keyCharI;
    keyCharIn = keyCharIn % 27;
    return alphabet[keyCharIn];
}

function kyTuGiaiMaVigere(char, keyChar) {
    let charI = parseInt(indexAlPhaBet[char]);
    let keyCharI = parseInt(indexAlPhaBet[keyChar])
    let keyCharIn = charI - keyCharI;
    keyCharIn = keyCharIn % 27;
    if (keyCharIn < 0) {
        keyCharIn = 27 + keyCharIn
    }
    return alphabet[keyCharIn];
}


function chuoiMaHoaVigere(string, stringKey) {
    let stringVigere = "";

    string += "";
    let i = 0,
        j = 0;
    while (i < string.length) {
        j = 0;
        while (j < stringKey.length && i < string.length) {
            stringVigere += kyTuMaHoaVigere(string[i], stringKey[j]);
            i += 1;
            j += 1;
        }

    }
    return stringVigere;
}


function chuoiGiaiHoaVigere(string, stringKey) {
    let stringVigere = "";

    string += "";
    let i = 0,
        j = 0;
    while (i < string.length) {
        j = 0;
        while (j < stringKey.length && i < string.length) {
            stringVigere += kyTuGiaiMaVigere(string[i], stringKey[j]);
            i += 1;
            j += 1;
        }

    }
    return stringVigere;
}


function renderKeyVigenRandom() {
    var stringKey = "";
    var n = Math.random() * 10 + 5;
    m = 0;
    for (let i = 0; i < n; i++) {
        m = Math.floor(Math.random() * 100 % alphabet.length)
        stringKey += alphabet[m];
    }
    return stringKey;
}