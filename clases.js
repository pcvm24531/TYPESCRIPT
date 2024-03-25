"use strict";
class Movie {
    constructor(name, actors, credits) {
        this.name = 'Rocky';
        this.name = name;
        this.actors = actors;
        this.credits = credits;
    }
    displayMovie() {
        console.log(`The ${this.name} movie is displayed `);
    }
}
const movie1 = new Movie('Rambo', ['Robert', 'Janette'], ['Stephen', 'George Lucas']);
const movie2 = new Movie('Que paso ayer?', ['Stu', 'Phill'], ['Dug', 'Chao']);
movie2.displayMovie();
