// Run is on https://riders.uber.com/trips page to get the current page amounts + summary
// Tip: bablify it (https://babeljs.io/repl/) to create a bookmarklet in your browser

(() => {
    let sum = 0;
    $('.trip-expand__origin .text--right').each(function(){
        const text = $(this).text();
        //console.log(text);
        let number = text && text.match(/[+-]?\d+(\.\d+)?/g);
        number = number && number[0];

        if(number/* && text && text.toLowerCase().indexOf('canceled') === -1*/){
            number = parseFloat(number);
            console.log(number);
            sum += number;
        }
    });
    console.log(`sum = ${sum}`);
})()
