var q = new collections.Heap(true);

    function isSmallerFunction(other){
      return this.value < other.value;
    };
    q.insert(new q.element(5, isSmallerFunction));
    q.insert(new q.element(3, isSmallerFunction));
    q.insert(new q.element(7, isSmallerFunction));
    q.insert(new q.element(1, isSmallerFunction));
    q.insert(new q.element(8, isSmallerFunction));
    q.insert(new q.element(8, isSmallerFunction));
    q.insert(new q.element(9, isSmallerFunction));
    q.insert(new q.element(0, isSmallerFunction));

    console.log(q.toString());
    
    while(q.size > 0 ){
      var aux = q.pop();
      console.log(aux.value);

}