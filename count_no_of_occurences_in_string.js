function char_count(str,letter){
    var letter_count = 0;
    for(var pos = 0 ; pos < str.length ; pos++){
        if(str.charAt(pos) == letter){
            letter_count += 1;
        }
    }
    return letter_count;
}
console.log(char_count('sivaprakash','a'));