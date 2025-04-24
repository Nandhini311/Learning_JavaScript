function show(){
    document.write("Our function has been revoked");
}

function RandomQuoteGenerator(){
    let i = Math.floor(Math.random() * 5);
    //Math.random only generates float values - 0 to 1, so using floor for getting a integer value.
    switch (i){
        case 0:
            document.write("Dreams don't work unless you do");
            break;

        case 1:
            document.write("In the middle of every difficulty lies opportunity.");
            break;
        case 2:
            document.write("The future depends on what you do today");
            break;
        case 3:
            document.write("Be so good they can't ignore you");
            break;

        case 4:
            document.write("Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.");
            break;
    };
}