function depthFirstSearch(rootNode, vertices, edges) {
  rootNode.discovered = true;

  let queue = [rootNode];
  let visitedNodes = [rootNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const adjacentNodes = findAdjacent(currentNode.name, vertices, edges);

    adjacentNodes.forEach(n => {
      queue.unshift(n);
      markDiscovered(adjacentNodes);
      visitedNodes.push(n);
    });
  }

  return visitedNodes;
}

function findAdjacent(node, vertices, edges) {
  let nodeEdges = edges.filter(edge => edge.includes(node));

  let adjacentNodes = nodeEdges.map(e => {
    return e.find(n => n !== node);
  });

  return vertices.filter(
    vertex => adjacentNodes.includes(vertex.name) && !vertex.discovered
  );
}

function markDiscovered(adjacentNodes) {
  adjacentNodes.forEach(n => {
    n.discovered = true;
  });
}
