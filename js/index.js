
            //======Assignment 2 in (JS) Quote===============//
    //===========================array of objects======================//
var arrOfQuote=[
    {
        qoute:'“Be yourself; everyone else is already taken.”',
        outhor:'― Oscar Wilde'
    },
    {
        qoute:"“ Iam selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best”",
        outhor:'― Marilyn Monroe'
    },
    {
        qoute:"“So many books, so little time.”",
        outhor:'― Frank Zappa'
    },
    {
        qoute:'““A room without books is like a body without a soul.”',
        outhor:'― Marcus Tullius Cicero'
    },
    {
        qoute:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        outhor:'― Dr. Seuss'
    },
    {
        qoute:"“You only live once, but if you do it right, once is enough.”",
        outhor:'― Mae West'
    },
   
]
             //===========================================================//


             //======================function for display=================//

function displayQuote(){
   
    var random=Math.floor(Math.random()*arrOfQuote.length);
    var cartona=arrOfQuote[random].qoute
    //=======check if random== the previous random or not=======//
    if(cartona== document.getElementById('quote').innerHTML){
        random+=1;
        document.getElementById('quote').innerHTML=arrOfQuote[random].qoute;
        document.getElementById('author').innerHTML=arrOfQuote[random].outhor;
    }
    else{
    
        document.getElementById('quote').innerHTML=arrOfQuote[random].qoute;
        document.getElementById('author').innerHTML=arrOfQuote[random].outhor;
    }
    //===========================================================//
}


              //===========================================================//