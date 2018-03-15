const loop_size = (node) => {
    let loop = 1;
    
    let nodeOne = node.next;
    let nodeTwo = node.next.next;
    
    // go to the loop (end of the tail)
    while(nodeTwo !== nodeOne) {
      nodeTwo = nodeTwo.next.next;
      nodeOne = nodeOne.next;
    }
    
    // next node (first one in the loop)
    nodeTwo = nodeTwo.next;
    
    // loop around until it gets to the first one
    while(nodeTwo !== nodeOne) {
       loop += 1;
       nodeTwo = nodeTwo.next;
    }
    
    return loop;
  }