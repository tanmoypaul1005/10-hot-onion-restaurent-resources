import Data from './Data.js';

const fakeData =[...Data];
const shuffle =a=>{
    for (let i = 0; i<a.length; i++) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
shuffle(fakeData);

export default fakeData;;