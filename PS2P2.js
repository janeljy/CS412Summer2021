function* emit_word (sentence) {
    var words = sentence.split(" ");
    var count = 0;
    while (true) {
        yield words[count++];
    }
}

test = emit_word("All I know is something like a bird within her sang");
var sentence = "All I know is something like a bird within her sang";
var words = sentence.split(" ");

var count = 0;
while (count++ < words.length) {
    console.log(test.next().value);
}
