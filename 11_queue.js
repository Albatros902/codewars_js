class LinkedList {
    #lenght = 0
    #head
    #tail

    addToTail(value) {
        const node = {
            value,
            next: null
        }

        if (this.#lenght === 0){
            this.#head = node
            this.#tail = node
        } else {
            this.#tail.next = node
            this.#tail = node
        }

        this.#lenght++
    }

    removeFromHead () {
        if (this.#lenght === 0) {
            return
        }

        const value = this.#head.values
        this.#head = this.#head.next
        this.#lenght--
        return value
    }

    size () {
        return this.#lenght
    }
}

class Queue  extends LinkedList{
    constructor() {
        super()

        this.enqueue = this.addToTail
        this.dequeue = this.removeFromHead
    }


    get size() {
        return super.size()
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue()

console.log(queue.size)