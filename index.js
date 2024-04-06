import { HashMap } from './hashmap.js';

const hashmap = HashMap();

hashmap.set('Carlos', 'I am the old value');
console.log(hashmap.get('Carlos'));
hashmap.set('Carlos', 'I am the new value');
console.log(hashmap.get('Carlos'));
console.log(hashmap.get('Doesnt exist'));
