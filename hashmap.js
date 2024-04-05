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

  return Object.assign({}, linkedList, { containsHashKey });
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

    if (bucket.size() === 0) {
      bucket.prepend(keyValuePair);
    }

    if (bucket.containsHashKey(key)) {
      console.log('test');
    }

    console.log(bucket.at(0));
  }

  return {
    buckets,
    set,
  }
}

