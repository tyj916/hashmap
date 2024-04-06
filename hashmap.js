import { LinkedList } from "./linkedLists.js";
export { HashMap };

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

  function set(key, value) {
    const hashCode = hash(key);
    const index = hashCode % capacity;
    const bucket = buckets[index];
    const keyValuePair = {key, value};
    const hashLoad = capacity * loadFactor;

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
    const array = [];
    buckets.forEach((bucket) => {
      if (bucket.size() > 0) array.push(bucket.entries());
    });
    return array;
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

