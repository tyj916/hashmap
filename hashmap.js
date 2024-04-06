import { LinkedList } from "./linkedLists.js";
export { HashMap, HashSet };

function HashLinkedList() {
  const linkedList = LinkedList();

  function containsHashKey(key) {
    let tmp = linkedList.at(0);
  
    while (tmp) {
      if (tmp.value.key === key) return true;
      tmp = tmp.nextNode;
    }
  
    return false;
  }

  function findHashKey(key) {
    let tmp = linkedList.at(0);
    let count = 0;
  
    while (tmp) {
      if (tmp.value.key === key) return count;
      tmp = tmp.nextNode;
      count++;
    }
  
    return null;
  }

  function getHashKeys() {
    let tmp = linkedList.at(0);
    const array = [];
  
    while (tmp) {
      array.push(tmp.value.key);
      tmp = tmp.nextNode;
    }
  
    return array;
  }

  function getHashValues() {
    let tmp = linkedList.at(0);
    const array = [];
  
    while (tmp) {
      array.push(tmp.value.value);
      tmp = tmp.nextNode;
    }
  
    return array;
  }

  function entries() {
    let tmp = linkedList.at(0);
    const array = [];
  
    while (tmp) {
      array.push([tmp.value.key, tmp.value.value]);
      tmp = tmp.nextNode;
    }
  
    return array;
  }

  return Object.assign({}, linkedList, { 
    containsHashKey,
    findHashKey,
    getHashKeys,
    getHashValues,
    entries,
   });
}

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode;
}

function HashMap() {
  let capacity = 16;
  const loadFactor = 0.75;
  const buckets = [];

  for (let i = 0; i < capacity; i++) {
    buckets.push(HashLinkedList());
  }

  function expandCapacity() {
    const allEntries = entries();
    buckets.length = 0;
    capacity *= 2;

    for (let i = 0; i < capacity; i++) {
      buckets.push(HashLinkedList());
    }

    allEntries.forEach((entry) => {
      set(entry[0], entry[1]);
    });

    console.log('Capacity expanded. Current capacity: ' + buckets.length);
  }

  function set(key, value) {
    const hashCode = hash(key);
    const index = hashCode % capacity;
    const bucket = buckets[index];
    const keyValuePair = {key, value};
    const hashLoad = capacity * loadFactor;

    if (length() > hashLoad) {
      console.log('Maximum load reached!');
      expandCapacity();
    }

    if (bucket.size() === 0) {
      bucket.prepend(keyValuePair);
      return;
    }

    const keyLocation = bucket.findHashKey(key);

    if (keyLocation == null) {
      bucket.append(keyValuePair);
    } else {
      bucket.at(keyLocation).value.value = value;
    }
  }

  function get(key) {
    const hashCode = hash(key);
    const index = hashCode % capacity;
    const bucket = buckets[index];

    if (bucket.size() === 0) {
      return null;
    }

    const keyLocation = bucket.findHashKey(key);

    if (keyLocation == null) {
      return null;
    } else {
      return bucket.at(keyLocation).value.value;
    }
  }

  function has(key) {
    const hashCode = hash(key);
    const index = hashCode % capacity;
    const bucket = buckets[index];

    if (bucket.size() === 0) {
      return false;
    }

    return bucket.containsHashKey(key);
  }

  function remove(key) {
    const hashCode = hash(key);
    const index = hashCode % capacity;
    const bucket = buckets[index];

    if (bucket.size() === 0) {
      return false;
    }

    const keyLocation = bucket.findHashKey(key);

    if (keyLocation == null) {
      return false;
    } else {
      bucket.removeAt(keyLocation);
      return true;
    }
  }

  function length() {
    return buckets.reduce((accumulator, bucket) => {
      return accumulator + bucket.size();
    }, 0);
  }

  function clear() {
    buckets.length = 0;

    for (let i = 0; i < capacity; i++) {
      buckets.push(HashLinkedList());
    }
  }

  function keys() {
    return buckets.reduce((accumulator, bucket) => {
      return accumulator.concat(bucket.getHashKeys());
    }, []);
  }

  function values() {
    return buckets.reduce((accumulator, bucket) => {
      return accumulator.concat(bucket.getHashValues());
    }, []);
  }

  function entries() {
    return buckets.reduce((accumulator, bucket) => {
      return accumulator.concat(bucket.entries());
    }, []);
  }

  return {
    buckets,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries
  }
}

class HashSet {
  constructor() {
    this.buckets = [];
    this.capacity = 16;
    this.loadFactor = 0.75;  

    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(LinkedList());
    }
  }

  set(key) {
    const hashCode = hash(key);
    const index = hashCode % this.capacity;
    const bucket = this.buckets[index];

    if (!bucket.contains(key)) {
      bucket.append(key);
    }
  }

  has(key) {
    const hashCode = hash(key);
    const index = hashCode % this.capacity;
    const bucket = this.buckets[index];

    return bucket.contains(key);
  }

  remove(key) {
    const hashCode = hash(key);
    const index = hashCode % this.capacity;
    const bucket = this.buckets[index];
    const keyLocation = bucket.find(key);
    
    if (keyLocation === null) {
      return false;
    } else {
      bucket.removeAt(keyLocation);
      return true;
    }
  }

  length() {
    return this.buckets.reduce((accumulator, bucket) => {
      return accumulator + bucket.size();
    }, 0);
  }

  clear() {
    this.buckets.length = 0;
    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(LinkedList());
    }
  }

  keys() {
    return this.buckets.reduce((accumulator, bucket) => {
      let tmp = bucket.at(0);
      const array = [];

      while (tmp) {
        array.push(tmp.value);
        tmp = tmp.nextNode;
      }

      return accumulator.concat(array);
    }, []);
  }
}