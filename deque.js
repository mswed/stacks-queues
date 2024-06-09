/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or back or add to the front or back. */

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** firstNode(val): add new value to the start of the queue when it's empty. */

  firstNode(val) {
    this.first = new Node(val);
    this.last = this.first;
  }
  /** appendLeft(val): add new value to the start of the queue. Returns undefined. */

  appendLeft(val) {
    // Do we have any items in the queue?
    if (this.isEmpty()) {
      this.firstNode(val);
    } else {
      // We do, add this new item at the start of the queue
      const node = new Node(val);
      node.next = this.first;
      this.first = node;
      node.next.previous = this.first;
    }
    this.size++;
  }

  /** appendLeft(val): add new value to the end of the queue. Returns undefined. */

  appendRight(val) {
    // Do we have any items in the queue?
    if (this.isEmpty()) {
      this.firstNode(val);
    } else {
      // We do, add this new item at the end of the queue
      const currentLast = this.last;
      this.last = new Node(val);
      this.last.previous = currentLast;
      currentLast.next = this.last;
    }
    this.size++;
  }
  /** popLeft(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  popLeft() {
    // Do we have any items in the queue?
    if (this.isEmpty()) {
      // We don't. Throw an error
      throw new Error('The Queue is empty!');
    } else {
      // We do, remove the first item from the list and return it
      const originalFirst = this.first;
      this.first = originalFirst.next;
      if (this.first) {
        this.first.previous = null;
      }
      this.size--
      return originalFirst.val
    }

  }

  /** popRight(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  popRight() {

    // Do we have any items in the queue?
    if (this.isEmpty()) {
      // We don't. Throw an error
      throw new Error('The Queue is empty!');
    } else {
      // We do, remove the last item from the list and return it
      const originalLast = this.last;
      this.last = originalLast.previous;
      if (this.last) {
        this.last.next = null;
      }
      this.size--
      return originalLast.val
    }

  }
  /** peekLeft(): return the value of the first node in the queue. */

  peekLeft() {
    return this.first.val;

  }

  /** peekRight(): return the value of the first node in the queue. */

  peekRight() {
    return this.last.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;

  }
}

module.exports = Deque;
