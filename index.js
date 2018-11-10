function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode];
  let visitedVertices = [rootNode];
  while (stack.length > 0) {
    let firstNode = stack.pop();
    if (!firstNode.discovered) {
      firstNode.discovered = true;
      let adjacentVertices = getEdges(firstNode, vertices, edges);
      adjacentVertices.forEach(vertex => {
        stack.push(vertex);
        visitedVertices.push(vertex);
      });
    }
  }
  return visitedVertices;
}

function getEdges(node, vertices, edges) {
  let nodesEdges = edges.filter(edge => edge.includes(node.name));
  let adjacentNodes = nodesEdges
    .map(edge => edge.filter(nodeInEdge => nodeInEdge !== node.name))
    .map(nodeArray => nodeArray[0]);
  return vertices.filter(
    vertex => adjacentNodes.includes(vertex.name) && !vertex.discovered
  );
}
