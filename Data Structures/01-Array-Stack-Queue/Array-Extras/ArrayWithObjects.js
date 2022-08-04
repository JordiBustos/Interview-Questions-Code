class ArrayList {
    constructor() {
	this.length = 0;
    	this.data = {};
    }
    push(item) {
	this.data[this.length] = item;
	this.length++;
    }
    
    pop() {
	const value = this.data[this.length - 1]
	delete this.data[this.length - 1]
	this.length--;
	return value
    }
    get(idx) {
	return this.data[idx]
    }
    remove(idx) {
	const value = this.data[idx];
	for (let i = idx; i < this.length; i++) {
	    this.data[i] = this.data[i+1];
	}
	delete this.data[this.length-1];
    	this.length--;
	return value;
    }
}
