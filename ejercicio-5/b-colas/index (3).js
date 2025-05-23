function Queue() {
 
    this.dataStore = Array.prototype.slice.call(arguments, 0);
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.empty = empty;
  
    this.print = print;
  
    function enqueue(element) {
        this.dataStore.push(element);
    }
  
    function dequeue() {
        return this.dataStore.shift();
    }
  
    function empty() {
        return this.dataStore = [];
    }
  
    function print(element) {
        this.dataStore.forEach(function (item) {
            // element.appendChild(item.node);
            console.log(item);
        });
    }
 
 