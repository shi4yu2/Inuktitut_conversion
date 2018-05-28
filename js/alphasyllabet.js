function toAlphabet() {
    var str = document.transformation.textinuk.value;

    var txt = str.replace(/ᖕᖐ/gmi, "nngii");
    txt = str.replace(/ᙲ/gmi, "nngii");
    txt = txt.replace(/ᖕᖒ/gmi, "nnguu");
    txt = txt.replace(/ᙴ/gmi, "nnguu");
    txt = txt.replace(/ᖕᖔ/gmi, "nngaa");
    txt = txt.replace(/ᙶ/gmi, "nngaa");

    txt = txt.replace(/ᖕᖏ/gmi, "nngi");
    txt = txt.replace(/ᙱ/gmi, "nngi");
    txt = txt.replace(/ᖕᖑ/gmi, "nngu");
    txt = txt.replace(/ᙳ/gmi, "nngu");
    txt = txt.replace(/ᖕᖓ/gmi, "nnga");
    txt = txt.replace(/ᙵ/gmi, "nnga");

    txt = txt.replace(/ᖐ/gmi, "ngii");
    txt = txt.replace(/ᖒ/gmi, "nguu");
    txt = txt.replace(/ᖔ/gmi, "ngaa");
    txt = txt.replace(/ᖏ/gmi, "ngi");
    txt = txt.replace(/ᖑ/gmi, "ngu");
    txt = txt.replace(/ᖓ/gmi, "nga");
    txt = txt.replace(/ᐲ/gmi, "pii");
    txt = txt.replace(/ᑏ/gmi, "tii");
    txt = txt.replace(/ᑮ/gmi, "kii");
    txt = txt.replace(/ᒌ/gmi, "gii");
    txt = txt.replace(/ᒦ/gmi, "mii");
    txt = txt.replace(/ᓃ/gmi, "nii");
    txt = txt.replace(/ᓰ/gmi, "sii");
    txt = txt.replace(/ᓖ/gmi, "lii");
    txt = txt.replace(/ᔩ/gmi, "jii");
    txt = txt.replace(/ᕖ/gmi, "vii");
    txt = txt.replace(/ᕇ/gmi, "rii");
    txt = txt.replace(/ᖀ/gmi, "qii");
    txt = txt.replace(/ᐴ/gmi, "puu");
    txt = txt.replace(/ᑑ/gmi, "tuu");
    txt = txt.replace(/ᑰ/gmi, "kuu");
    txt = txt.replace(/ᒎ/gmi, "guu");
    txt = txt.replace(/ᒨ/gmi, "muu");
    txt = txt.replace(/ᓅ/gmi, "nuu");
    txt = txt.replace(/ᓲ/gmi, "suu");
    txt = txt.replace(/ᓘ/gmi, "luu");
    txt = txt.replace(/ᔫ/gmi, "juu");
    txt = txt.replace(/ᕘ/gmi, "vuu");
    txt = txt.replace(/ᕉ/gmi, "ruu");
    txt = txt.replace(/ᖂ/gmi, "quu");
    txt = txt.replace(/ᐹ/gmi, "paa");
    txt = txt.replace(/ᑖ/gmi, "taa");
    txt = txt.replace(/ᑳ/gmi, "kaa");
    txt = txt.replace(/ᒑ/gmi, "gaa");
    txt = txt.replace(/ᒫ/gmi, "maa");
    txt = txt.replace(/ᓈ/gmi, "naa");
    txt = txt.replace(/ᓵ/gmi, "saa");
    txt = txt.replace(/ᓛ/gmi, "laa");
    txt = txt.replace(/ᔮ/gmi, "jaa");
    txt = txt.replace(/ᕚ/gmi, "vaa");
    txt = txt.replace(/ᕌ/gmi, "raa");
    txt = txt.replace(/ᖄ/gmi, "qaa");
    txt = txt.replace(/ᐱ/gmi, "pi");
    txt = txt.replace(/ᑎ/gmi, "ti");
    txt = txt.replace(/ᑭ/gmi, "ki");
    txt = txt.replace(/ᒋ/gmi, "gi");
    txt = txt.replace(/ᒥ/gmi, "mi");
    txt = txt.replace(/ᓂ/gmi, "ni");
    txt = txt.replace(/ᓯ/gmi, "si");
    txt = txt.replace(/ᓕ/gmi, "li");
    txt = txt.replace(/ᔨ/gmi, "ji");
    txt = txt.replace(/ᕕ/gmi, "vi");
    txt = txt.replace(/ᕆ/gmi, "ri");
    txt = txt.replace(/ᕿ/gmi, "qi");
    txt = txt.replace(/ᐳ/gmi, "pu");
    txt = txt.replace(/ᑐ/gmi, "tu");
    txt = txt.replace(/ᑯ/gmi, "ku");
    txt = txt.replace(/ᒍ/gmi, "gu");
    txt = txt.replace(/ᒧ/gmi, "mu");
    txt = txt.replace(/ᓄ/gmi, "nu");
    txt = txt.replace(/ᓱ/gmi, "su");
    txt = txt.replace(/ᓗ/gmi, "lu");
    txt = txt.replace(/ᔪ/gmi, "ju");
    txt = txt.replace(/ᕗ/gmi, "vu");
    txt = txt.replace(/ᕈ/gmi, "ru");
    txt = txt.replace(/ᖁ/gmi, "qu");
    txt = txt.replace(/ᐸ/gmi, "pa");
    txt = txt.replace(/ᑕ/gmi, "ta");
    txt = txt.replace(/ᑲ/gmi, "ka");
    txt = txt.replace(/ᒐ/gmi, "ga");
    txt = txt.replace(/ᒪ/gmi, "ma");
    txt = txt.replace(/ᓇ/gmi, "na");
    txt = txt.replace(/ᓴ/gmi, "sa");
    txt = txt.replace(/ᓚ/gmi, "la");
    txt = txt.replace(/ᔭ/gmi, "ja");
    txt = txt.replace(/ᕙ/gmi, "va");
    txt = txt.replace(/ᕋ/gmi, "ra");
    txt = txt.replace(/ᖃ/gmi, "qa");
    txt = txt.replace(/ᐄ/gmi, "ii");
    txt = txt.replace(/ᐆ/gmi, "uu");
    txt = txt.replace(/ᐋ/gmi, "aa");
    txt = txt.replace(/ᐃ/gmi, "i");
    txt = txt.replace(/ᐅ/gmi, "u");
    txt = txt.replace(/ᐊ/gmi, "a");
    txt = txt.replace(/ᑉ/gmi, "p");
    txt = txt.replace(/ᑦ/gmi, "t");
    txt = txt.replace(/ᒃ/gmi, "k");
    txt = txt.replace(/ᒡ/gmi, "g");
    txt = txt.replace(/ᒻ/gmi, "m");
    txt = txt.replace(/ᓐ/gmi, "n");
    txt = txt.replace(/ᔅ/gmi, "s");
    txt = txt.replace(/ᓪ/gmi, "l");
    txt = txt.replace(/ᔾ/gmi, "j");
    txt = txt.replace(/ᕝ/gmi, "v");
    txt = txt.replace(/ᕐ/gmi, "r");
    txt = txt.replace(/ᖅ/gmi, "q");
    txt = txt.replace(/ᖕ/gmi, "ng");
    txt = txt.replace(/ᖖ/gmi, "nng");
    txt = txt.replace(/ᐁ/gmi, "ai");
    txt = txt.replace(/ᐯ/gmi, "pai");
    txt = txt.replace(/ᑌ/gmi, "tai");
    txt = txt.replace(/ᑫ/gmi, "kai");
    txt = txt.replace(/ᒉ/gmi, "gai");
    txt = txt.replace(/ᒣ/gmi, "mai");
    txt = txt.replace(/ᓀ/gmi, "nai");
    txt = txt.replace(/ᓭ/gmi, "sai");
    txt = txt.replace(/ᓓ/gmi, "lai");
    txt = txt.replace(/ᔦ/gmi, "jai");
    txt = txt.replace(/ᕓ/gmi, "vai");
    txt = txt.replace(/ᕃ/gmi, "rai");
    txt = txt.replace(/ᙯ/gmi, "qai");
    txt = txt.replace(/ᙰ/gmi, "ngai");

    document.transformation.textlatin.value = txt;
}


function toSyllabary() {
    var str = document.transformation.textlatin.value;
    var txt = str.replace(/ngai/gmi, "ᙰ");
    txt = txt.replace(/nngii/gmi, "ᖕᖐ");
    txt = txt.replace(/nnguu/gmi, "ᖕᖒ");
    txt = txt.replace(/nngaa/gmi, "ᖕᖔ");
    txt = txt.replace(/nngi/gmi, "ᖕᖏ");
    txt = txt.replace(/nngu/gmi, "ᖕᖑ");
    txt = txt.replace(/nnga/gmi, "ᖕᖓ");
    txt = txt.replace(/ngii/gmi, "ᖐ");
    txt = txt.replace(/nguu/gmi, "ᖒ");
    txt = txt.replace(/ngaa/gmi, "ᖔ");
    txt = txt.replace(/ngi/gmi, "ᖏ");
    txt = txt.replace(/ngu/gmi, "ᖑ");
    txt = txt.replace(/nga/gmi, "ᖓ");
    txt = txt.replace(/pai/gmi, "ᐯ");
    txt = txt.replace(/tai/gmi, "ᑌ");
    txt = txt.replace(/kai/gmi, "ᑫ");
    txt = txt.replace(/gai/gmi, "ᒉ");
    txt = txt.replace(/mai/gmi, "ᒣ");
    txt = txt.replace(/nai/gmi, "ᓀ");
    txt = txt.replace(/sai/gmi, "ᓭ");
    txt = txt.replace(/lai/gmi, "ᓓ");
    txt = txt.replace(/jai/gmi, "ᔦ");
    txt = txt.replace(/vai/gmi, "ᕓ");
    txt = txt.replace(/rai/gmi, "ᕃ");
    txt = txt.replace(/qai/gmi, "ᙯ");
    txt = txt.replace(/ai/gmi, "ᐁ");
    txt = txt.replace(/pii/gmi, "ᐲ");
    txt = txt.replace(/tii/gmi, "ᑏ");
    txt = txt.replace(/kii/gmi, "ᑮ");
    txt = txt.replace(/gii/gmi, "ᒌ");
    txt = txt.replace(/mii/gmi, "ᒦ");
    txt = txt.replace(/nii/gmi, "ᓃ");
    txt = txt.replace(/sii/gmi, "ᓰ");
    txt = txt.replace(/lii/gmi, "ᓖ");
    txt = txt.replace(/jii/gmi, "ᔩ");
    txt = txt.replace(/vii/gmi, "ᕖ");
    txt = txt.replace(/rii/gmi, "ᕇ");
    txt = txt.replace(/qii/gmi, "ᖀ");
    txt = txt.replace(/puu/gmi, "ᐴ");
    txt = txt.replace(/tuu/gmi, "ᑑ");
    txt = txt.replace(/kuu/gmi, "ᑰ");
    txt = txt.replace(/guu/gmi, "ᒎ");
    txt = txt.replace(/muu/gmi, "ᒨ");
    txt = txt.replace(/nuu/gmi, "ᓅ");
    txt = txt.replace(/suu/gmi, "ᓲ");
    txt = txt.replace(/luu/gmi, "ᓘ");
    txt = txt.replace(/juu/gmi, "ᔫ");
    txt = txt.replace(/vuu/gmi, "ᕘ");
    txt = txt.replace(/ruu/gmi, "ᕉ");
    txt = txt.replace(/quu/gmi, "ᖂ");
    txt = txt.replace(/paa/gmi, "ᐹ");
    txt = txt.replace(/taa/gmi, "ᑖ");
    txt = txt.replace(/kaa/gmi, "ᑳ");
    txt = txt.replace(/gaa/gmi, "ᒑ");
    txt = txt.replace(/maa/gmi, "ᒫ");
    txt = txt.replace(/naa/gmi, "ᓈ");
    txt = txt.replace(/saa/gmi, "ᓵ");
    txt = txt.replace(/laa/gmi, "ᓛ");
    txt = txt.replace(/jaa/gmi, "ᔮ");
    txt = txt.replace(/vaa/gmi, "ᕚ");
    txt = txt.replace(/raa/gmi, "ᕌ");
    txt = txt.replace(/qaa/gmi, "ᖄ");
    txt = txt.replace(/pi/gmi, "ᐱ");
    txt = txt.replace(/ti/gmi, "ᑎ");
    txt = txt.replace(/ki/gmi, "ᑭ");
    txt = txt.replace(/gi/gmi, "ᒋ");
    txt = txt.replace(/mi/gmi, "ᒥ");
    txt = txt.replace(/ni/gmi, "ᓂ");
    txt = txt.replace(/si/gmi, "ᓯ");
    txt = txt.replace(/li/gmi, "ᓕ");
    txt = txt.replace(/ji/gmi, "ᔨ");
    txt = txt.replace(/vi/gmi, "ᕕ");
    txt = txt.replace(/ri/gmi, "ᕆ");
    txt = txt.replace(/qi/gmi, "ᕿ");
    txt = txt.replace(/pu/gmi, "ᐳ");
    txt = txt.replace(/tu/gmi, "ᑐ");
    txt = txt.replace(/ku/gmi, "ᑯ");
    txt = txt.replace(/gu/gmi, "ᒍ");
    txt = txt.replace(/mu/gmi, "ᒧ");
    txt = txt.replace(/nu/gmi, "ᓄ");
    txt = txt.replace(/su/gmi, "ᓱ");
    txt = txt.replace(/lu/gmi, "ᓗ");
    txt = txt.replace(/ju/gmi, "ᔪ");
    txt = txt.replace(/vu/gmi, "ᕗ");
    txt = txt.replace(/ru/gmi, "ᕈ");
    txt = txt.replace(/qu/gmi, "ᖁ");
    txt = txt.replace(/pa/gmi, "ᐸ");
    txt = txt.replace(/ta/gmi, "ᑕ");
    txt = txt.replace(/ka/gmi, "ᑲ");
    txt = txt.replace(/ga/gmi, "ᒐ");
    txt = txt.replace(/ma/gmi, "ᒪ");
    txt = txt.replace(/na/gmi, "ᓇ");
    txt = txt.replace(/sa/gmi, "ᓴ");
    txt = txt.replace(/la/gmi, "ᓚ");
    txt = txt.replace(/ja/gmi, "ᔭ");
    txt = txt.replace(/va/gmi, "ᕙ");
    txt = txt.replace(/ra/gmi, "ᕋ");
    txt = txt.replace(/qa/gmi, "ᖃ");
    txt = txt.replace(/ii/gmi, "ᐄ");
    txt = txt.replace(/uu/gmi, "ᐆ");
    txt = txt.replace(/aa/gmi, "ᐋ");
    txt = txt.replace(/i/gmi, "ᐃ");
    txt = txt.replace(/u/gmi, "ᐅ");
    txt = txt.replace(/a/gmi, "ᐊ");
    txt = txt.replace(/p/gmi, "ᑉ");
    txt = txt.replace(/t/gmi, "ᑦ");
    txt = txt.replace(/k/gmi, "ᒃ");
    txt = txt.replace(/g/gmi, "ᒡ");
    txt = txt.replace(/m/gmi, "ᒻ");
    txt = txt.replace(/n/gmi, "ᓐ");
    txt = txt.replace(/s/gmi, "ᔅ");
    txt = txt.replace(/l/gmi, "ᓪ");
    txt = txt.replace(/j/gmi, "ᔾ");
    txt = txt.replace(/v/gmi, "ᕝ");
    txt = txt.replace(/r/gmi, "ᕐ");
    txt = txt.replace(/q/gmi, "ᖅ");
    txt = txt.replace(/nng/gmi, "ᖖ");
    txt = txt.replace(/ng/gmi, "ᖕ");

    document.transformation.textinuk.value = txt;
}


function insertLetter(item) {
    var input = document.transformation.textinuk;
    if (document.selection) {
        input.focus();
        range = document.selection.createRange();
        range.text = item;
        range.select();
    }
    else if (input.selectionStart || input.selectionStart === '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        var cursorPos = startPos;
        var scrollTop = input.scrollTop;
        var baselength = 0;
        input.value = input.value.substring(0, startPos)
            + item
            + input.value.substring(endPos, input.value.length);
        cursorPos += item.length;
        input.focus();
        input.selectionStart = cursorPos;
        input.selectionEnd = cursorPos;
        input.scrollTop = scrollTop;
    }
    else {
        input.value += item;
        input.focus();
    }
    toAlphabet()
}