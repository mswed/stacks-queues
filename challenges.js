const Stack = require("./stack");

// Reverse a string

function reverse(str) {
    const s = new Stack();
    let reversedSr = '';

    for (const char of str) {
        s.push(char)
    }

    while (!s.isEmpty()) {
        reversedSr +=s.pop()
    }
    console.log(reversedSr)
}

function balancedBrackets(str) {
    const targets = ['(', ')', '[', ']', '{', '}']
    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    const s = new Stack();

    for (const char of str) {
        if (targets.includes(char)) {
            if (s.isEmpty()) {
                s.push(char);
            } else {
                if (Object.keys(mapping).includes(char)) {
                    if (s.first.val === mapping[char]) {
                        s.pop()
                    }
                } else {
                    s.push(char)
                }
            }
        }

    }
    return s.size === 0;

}

console.log(balancedBrackets('((ok) [nope])'))