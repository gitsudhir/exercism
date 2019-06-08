export class BinarySearchTree {
    constructor(data) {
        this.right = null;
        this.left = null;
        this.data = data
    }
    insert(num) {
        var node = new BinarySearchTree(num);
        if (num <= this.data) {
            if (!this.left) this.left = node;
            else this.left.insert(num);
        }
        if (num > this.data) {
            if (!this.right) this.right = node;
            else this.right.insert(num);
        }

    }
    each(fun) {
        if (this.left) {
            this.left.each(fun);
        }
        fun(this.data);
        if (this.right) {
            this.right.each(fun);
        }
    }
}