import { HashMap, HashSet } from './hashmap.js';


/** hash map test
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
hashmap.set('Test7', 'Test length');
hashmap.set('Test8', 'Test length');
hashmap.set('Test9', 'Test length');
hashmap.set('Test10', 'Test length');
hashmap.set('Test11', 'Test length');
hashmap.set('Test12', 'Test length');
console.log(hashmap.keys());
console.log(hashmap.values());
console.log(hashmap.entries());
hashmap.set('Load Test', 'Capacity test');
console.log(hashmap.length());
hashmap.clear();
console.log(hashmap.length());
console.log(hashmap.get('Carlos'));
*/

// hashset test
const hashset = new HashSet();
hashset.set('test');
hashset.set('remove me');
console.log(hashset.length());
console.log(hashset.has('remove me'));
hashset.remove('remove me');
console.log(hashset.has('remove me'));
console.log(hashset.length());
