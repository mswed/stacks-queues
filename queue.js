/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // Do we have any items in the queue?
    if (this.isEmpty()) {
      // We don't make this new item the first and the last
      this.first = new Node(val);
      this.last = this.first;
    } else {
      // We do, add this new item at the end of the queue
      const node = new Node(val);
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

    // Do we have any items in the queue?
    if (this.isEmpty()) {
      // We don't throw an error
      throw new Error('The Queue is empty!');
    } else {
      // We do, remove the first item from the list and return it
      const originalStart = this.first;
      this.first = originalStart.next;
      originalStart.next = null;
      this.size--
      return originalStart.val
    }



  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;

  }
}

module.exports = Queue;
