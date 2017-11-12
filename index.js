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