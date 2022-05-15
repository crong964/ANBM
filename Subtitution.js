var subtitutionKey = "qljxgmuozvdnepbswhrayfckti "


function renderKySubtitutionRamdom() {
    let alphabetT = alphabet;
    let keySubtitution = "";
    let randomIndex = 0;

    while (alphabetT.length != 0) {
        randomIndex = Math.floor(Math.random() * 100 % alphabetT.length);
        keySubtitution += alphabetT[randomIndex];

        alphabetT = alphabetT.replace(alphabetT[randomIndex] + "", '');
    }
    return keySubtitution;
}


function kyTuMaHoaSubtitution(subtitutionKey, char) {
    let index = indexAlPhaBet[char];
    return subtitutionKey[index];
}

function kyTuGiaiHoaSubtitution(subtitutionKey, char) {
    debugger
    let index = 0;
    debugger
    while (subtitutionKey.length > index) {
        if (subtitutionKey[index] === char) {
            break;
        }
        index += 1;
    }
    return alphabet[index];
}


function chuoiMaHoaSubtitution(string, subtitutionKey) {
    let stringSubtitution = "";

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        stringSubtitution += kyTuMaHoaSubtitution(subtitutionKey, element);
    }
    return stringSubtitution;
}

function chuoiGiaiMaSubtitution(string, subtitutionKey) {
    let stringSubtitution = "";

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        stringSubtitution += kyTuGiaiHoaSubtitution(subtitutionKey, element);
    }
    return stringSubtitution;

}