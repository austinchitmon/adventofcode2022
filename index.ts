import { readFileSync } from 'fs';
function day1(): void  {
    let condensed = [];
    (readFileSync('./inputs/day1.txt', 'utf8').split('\r\n') as any).reduce((acc, current) => {
        if ( current === '') {
            condensed = [...condensed, acc];
            return 0
        } else {
            return +acc + +current;
        }
    });
    condensed.sort((a,b) => b - a);
    console.log('Top 1:', condensed[0]);
    console.log('Top 3:', condensed[0]+condensed[1]+condensed[2]);
}

day1();