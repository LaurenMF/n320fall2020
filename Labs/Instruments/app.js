let loudness = 135;
let family = this.family;
let verb = this.verb;

console.log("hello");



class Instrument {
    constructor(newWoodwind, newPercussion, newStringed) {

        let music = [
            newWoodwind,
            newPercussion,
            newStringed
        ];


        for(let i=0; i<=2; i++) {
            play(music, i);
        }
        
        function play(music, i) {

            console.log(music[i, 1] + ' ' + music[i, 2] + ' at ' + music[i, 0]);
           
        }
    }
}

new Instrument(loudness, family, verb);


class Woodwind extends Instrument{
    constructor(loudness, family, verb) {
        super(loudness);
        this.family = 'woodwind';
        this.verb = 'melody';
    }
}

class Percussion extends Instrument{
    constructor(loudness, family, verb){
        super(loudness);
        this.family = 'percussion';
        this.verb = 'boisterous';
        //play(newPercussion);
    }
}

class Stringed extends Instrument{
    constructor(loudness, family, verb) {
        super(loudness);
        this.family = 'strings';
        this.verb = 'ambient';
        //play(newStringed);
    }

}

let newWoodwind = new Woodwind(135, this.family, this.verb);
let newPercussion = new Percussion(120, this.family, this.verb);
let newStringed = new Stringed(150, this.family, this.verb);