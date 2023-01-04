async function generateTree() {
  try {
    const numNodes = Math.floor(Math.random() * 10) + 1; // Random number of nodes between 1 and 10
    const nodes = [];

    for (let i = 0; i < numNodes; i++) {
      const nodeName = String.fromCharCode(i + 65); // Generate node names A, B, C, etc.
      const value = Math.floor(Math.random() * 100); // Generate random node values between 0 and 99
      const numPointers = Math.floor(Math.random() * 10); // Random number of pointers between 0 and 9
      const pointers = [];

      for (let j = 0; j < numPointers; j++) {
        pointers.push(
          String.fromCharCode(Math.floor(Math.random() * numNodes + 65))
        ); // Generate random pointer names
      }

      nodes.push({ nodeName, value, pointers });
    }

    return nodes;
  } catch (error) {
    console.error(error);
  }
}

async function buildTree(objects, targetNodeName, visited = new Set()) {
  try {
    // Return null if the target node has already been visited (to avoid circular references)
    if (visited.has(targetNodeName)) return null;

    // Mark the target node as visited
    visited.add(targetNodeName);

    // Find the target node in the array
    const targetNode = objects.find((node) => node.nodeName === targetNodeName);

    // Return null if the target node is not found
    if (!targetNode) return null;

    // Create a new tree node with the value and name of the target node
    const root = { value: targetNode.value, nodeName: targetNode.nodeName };

    // Recursively build the tree for each pointer of the target node
    root.children = await Promise.all(
      targetNode.pointers.map(async (pointerNodeName) =>
        buildTree(objects, pointerNodeName, visited)
      )
    );

    return root;
  } catch (error) {
    console.error(error);
  }
}

function drawTree(node, level = 0) {
  if (!node) return;

  console.log(" ".repeat(4 * level) + "└── " + node.nodeName);

  for (const child of node.children) {
    drawTree(child, level + 1);
  }
}

const main = async () => {
  try {
    const nodeList = await generateTree();
    const root = await buildTree(nodeList, "A");
    drawTree(root);
  } catch (error) {
    console.error(error);
  }
};

main();
