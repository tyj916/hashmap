import { HashMap } from './hashmap.js';

const hashmap = HashMap();

hashmap.set('Carlos', 'I am the old value');
console.log(hashmap.get('Carlos'));
hashmap.set('Carlos', 'I am the new value');
console.log(hashmap.has('Carlos'));
console.log(hashmap.has('Doesnt exist'));
console.log(hashmap.get('Carlos'));
console.log(hashmap.get('Doesnt exist'));
hashmap.set('Remove', 'Remove me');
console.log(hashmap.get('Remove'));
console.log(hashmap.remove('Remove'));
console.log(hashmap.has('Remove'));
hashmap.set('Test1', 'Test length');
hashmap.set('Test2', 'Test length');
hashmap.set('Test3', 'Test length');
hashmap.set('Test4', 'Test length');
hashmap.set('Test5', 'Test length');
hashmap.set('Test6', 'Test length');
console.log('Keys: ' + hashmap.keys());
console.log('Values: ' + hashmap.values());
console.log('Entries: ' + hashmap.entries());
console.log(hashmap.length());
hashmap.clear();
console.log(hashmap.length());
console.log(hashmap.get('Carlos'));
