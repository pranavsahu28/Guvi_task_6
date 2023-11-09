//QUSETION:1
//a)
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this .rating=rating;
    }
    get PG(){
        return this.rating;
    }
    }
var film=new Movie("AVENGERS-ENDGAME","MARVEL STUDIOS","PG10");
console.log(film.title);
console.log(film.studio);
console.log(film.rating);
//b)
var film1=new Movie("The Amazing Spiderman","Sony production")
console.log(film1.rating);
//c)
console.log(film.rating);
//d)
var film2=new Movie("KGF","HOMBALE FILMS","PG13");
console.log(film2.title);
console.log(film2.studio);
console.log(film2.rating);