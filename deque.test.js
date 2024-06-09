const Deque = require("./deque");

let queue;

beforeEach(function() {
  queue = new Deque();
});

describe("appendLeft", function() {
  it("places the value at the start of the queue and returns undefined", function() {
    expect(queue.appendLeft(10)).toBe(undefined);
    expect(queue.first.val).toBe(10);
    expect(queue.last.val).toBe(10);
    queue.appendLeft(100);
    expect(queue.first.val).toBe(100);
    expect(queue.first.next.val).toBe(10);
    expect(queue.first.previous).toBe(null);
    expect(queue.last.val).toBe(10);
    expect(queue.last.next).toBe(null);
    expect(queue.last.previous.val).toBe(100);
    queue.appendLeft(1000);
    expect(queue.first.val).toBe(1000);
    expect(queue.first.next.val).toBe(100);
    expect(queue.last.val).toBe(10);
    expect(queue.last.previous.val).toBe(100);
  });
});

describe("appendRight", function() {
  it("places the value at the end of the queue and returns undefined", function() {
    expect(queue.appendRight(10)).toBe(undefined);
    expect(queue.first.val).toBe(10);
    expect(queue.last.val).toBe(10);
    queue.appendRight(100);
    expect(queue.first.val).toBe(10);
    expect(queue.first.next.val).toBe(100);
    expect(queue.first.previous).toBe(null);
    expect(queue.last.val).toBe(100);
    expect(queue.last.next).toBe(null);
    expect(queue.last.previous.val).toBe(10);
    queue.appendRight(1000);
    expect(queue.first.val).toBe(10);
    expect(queue.first.next.val).toBe(100);
    expect(queue.last.val).toBe(1000);
    expect(queue.last.previous.val).toBe(100);
  });
});

describe("popLeft", function() {
  it("returns the value of the node removed from the start of the queue", function() {
    queue.appendRight(10);
    queue.appendRight(100);
    queue.appendRight(1000);
    let removed = queue.popLeft();
    expect(removed).toBe(10);
    expect(queue.size).toBe(2);
    queue.popLeft();
    queue.popLeft();
    expect(queue.size).toBe(0);
  });

  it("throws an error if the queue is empty", function() {
    expect(() => queue.dequeue()).toThrow(Error);
  });
});

describe("popRight", function() {
  it("returns the value of the node removed from the start of the queue", function() {
    queue.appendLeft(10);
    queue.appendLeft(100);
    queue.appendLeft(1000);
    let removed = queue.popRight();
    expect(removed).toBe(10);
    expect(queue.size).toBe(2);
    queue.popRight();
    queue.popRight();
    expect(queue.size).toBe(0);
  });

  it("throws an error if the queue is empty", function() {
    expect(() => queue.dequeue()).toThrow(Error);
  });
});

describe("peekLeft", function() {
  it("returns the value at the start of the queue", function() {
    queue.appendRight(3);
    expect(queue.peekLeft()).toBe(3);
    queue.appendRight(5);
    expect(queue.peekLeft()).toBe(3);
  });
});

describe("peekRight", function() {
  it("returns the value at the end of the queue", function() {
    queue.appendLeft(3);
    expect(queue.peekRight()).toBe(3);
    queue.appendLeft(5);
    expect(queue.peekRight()).toBe(3);
  });
});

describe("isEmpty", function() {
  it("returns true for empty queues", function() {
    expect(queue.isEmpty()).toBe(true);
  });

  it("returns false for nonempty queues", function() {
    queue.appendLeft(3);
    expect(queue.isEmpty()).toBe(false);
  });
});
