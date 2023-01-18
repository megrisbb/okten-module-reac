import {Simpsons} from "./Simpsons";

const SimpsonsFamily = () => {
    return (
        <div className='wrap'>
            <div className='simpsonFamily'>
                <Simpsons
                    itemName={'Homer Simpson'}
                    picture={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
                    age={'Age: 40'}
                    info={'Homer Jay Simpson (English: Homer Jay Simpson) is one of the main characters of the animated series "The Simpsons". Homer is the rude and impolite father of the family, he has obvious flaws: he is fat, bald and not very smart. Often he behaves like a clown, absurdly, selfishly and tactlessly, but still remains likable.'}
                />
                <Simpsons
                    itemName={'Marge Simpson'}
                    picture={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
                    age={'Age: 38'}
                    info={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) (English: Marjorie Jacqueline "Marge" Simpson) is a regular character of the animated series "The Simpsons", voiced by Julia Kavner. She usually wears a green dress, red ballet flats, a necklace made of artificial pearls around her neck and drives an orange station wagon. She has gorgeous blue hair, which she usually wears in a very high updo. Hazel eyes (19s6e). '}
                />
                <Simpsons
                    itemName={'Bart Simpson'}
                    picture={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
                    age={'Age: 10'}
                    info={'Bartholomew JoJo "Bart" Simpson (English Bartholomew JoJo "Bart" Simpson) is one of the main characters of the animated series The Simpsons. Bart is the oldest child of Homer and Marge Simpson. He also has two younger sisters, Lisa and Maggie. Bart is the epitome of a brawler and a mediocre student at school. Along with his father, Bart is one of the most famous characters in this series.'}
                />
                <Simpsons
                    itemName={'Lisa Simpson'}
                    picture={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
                    age={'Age: 9'}
                    info={'Lisa Marie Simpson is the heroine of the animated series The Simpsons. The average child in the family, an eight-year-old girl who stands out among the rest of the Simpsons primarily with her intelligence and prudence'}
                />
                <Simpsons
                    itemName={'Maggie Simpson'}
                    picture={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
                    age={'Age: 1'}
                    info={'Margaret Evelyn "Maggie" Simpson is a character on the animated television series The Simpsons. She first appeared on television on The Tracey Ullman Show in the short film Good Night. April 19, 1987. Maggie was conceived and designed by cartoonist Matt Groening while he was waiting to meet James L. Brooks. Named after Groening\'s younger sister. After appearing on The Tracey Ullman Show, three years later, the Simpson family received their own series on Fox, debuting on December 17, 1989.'}
                />
            </div>
        </div>
    );
};

export {SimpsonsFamily};