export function LinkedList() {
  let headNode = null;

  function append(value) {
    if (headNode === null) prepend(value);
    else {
      tail().nextNode = Node(value);
    }
  }

  function prepend(value) {
    headNode = Node(value, headNode);
  }

  function size() {
    let count = 0;
    let tmp = headNode;

    while (tmp) {
      count++;
      tmp = tmp.nextNode;
    }

    return count;
  }

  function head() {
    return headNode;
  }

  function tail() {
    let tmp = headNode;

    while (tmp.nextNode) {
      tmp = tmp.nextNode;
    }

    return tmp;
  }

  function at(index) {
    let count = 0;
    let tmp = headNode;

    while (tmp && count < index) {
      tmp = tmp.nextNode;
      count++;
    }

    return tmp;
  }

  function pop() {
    let tmp = headNode;
    let count = 0;

    while (count < size() -2) {
      tmp = tmp.nextNode;
      count++;
    }

    tmp.nextNode = null;
  }

  function contains(value) {
    let tmp = headNode;

    while (tmp) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }

    return false;
  }

  function find(value) {
    let tmp = headNode;
    let count = 0;

    while (tmp) {
      if (tmp.value === value) return count;
      tmp = tmp.nextNode;
      count++;
    }

    return null;
  }

  function toString() {
    let tmp = headNode;
    let string = '';

    while (tmp) {
      string = `${string}${tmp.value} -> `;
      tmp = tmp.nextNode;
    }

    return string + 'null';
  }

  function insertAt(value, index) {
    if (index === 0 || !headNode) {
      prepend(value);
    } else {
      let tmp = headNode;
      let count = 0;

      while (tmp && count < index - 1) {
        tmp = tmp.nextNode;
        count++;
      }

      tmp.nextNode = Node(value, tmp.nextNode);
    }
  }

  function removeAt(index) {
    if (index > size()) return;

    if (index === 0) {
      headNode = headNode.nextNode;
    } else {
      let tmp = headNode;
      let count = 0;

      while (count < index - 1) {
        tmp = tmp.nextNode;
        count++;
      }

      tmp.nextNode = tmp.nextNode.nextNode;
    }
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  }
}

function Node(value = null, nextNode = null) {

  return {
    value, 
    nextNode,
  }
}
