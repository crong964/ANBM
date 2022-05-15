function kyTuMaHoaCeasar(char, keyChar) {
    let charI = parseInt(indexAlPhaBet[char]);
    let keyCharI = parseInt(indexAlPhaBet[keyChar])
    let keyCharIn = charI + keyCharI;
    keyCharIn = keyCharIn % 27;
    return alphabet[keyCharIn];
}


function chuoiMaHoaCeasar(string, keyChar) {
    let stringCeasar = "";

    string += "";
    for (let i = 0; i < string.length; i++) {
        string[i] = kyTuMaHoaCeasar(string[i], keyChar);
        stringCeasar += kyTuMaHoaCeasar(string[i], keyChar);
    }
    return stringCeasar;
}

function kyTuGiaiMaCeasar(char, keyChar) {
    let charI = parseInt(indexAlPhaBet[char]);
    let keyCharI = parseInt(indexAlPhaBet[keyChar])
    let keyCharIn = charI - keyCharI;
    keyCharIn = keyCharIn % 27;
    if (keyCharIn < 0) {
        keyCharIn = 27 + keyCharIn
    }
    return alphabet[keyCharIn];
}

function chuoiGiaiMaCeasar(string, keyChar) {
    let stringCeasar = "";
    for (let i = 0; i < string.length; i++) {

        stringCeasar += kyTuGiaiMaCeasar(string[i], keyChar);
    }
    return stringCeasar;
}

function renderKeyCeasarRandom() {
    let m = Math.floor(Math.random() * 100 % alphabet.length);

    return alphabet[m];
}