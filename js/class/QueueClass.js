class Queue {
    constructor(data = []) {
        this.data = data;
    }

    push(element) {
        this.data.unshift(element);
    }

    pop() {
        return this.data.pop();
    }

    get length() {
        return this.data.length;
    }
}