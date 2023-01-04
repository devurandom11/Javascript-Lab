const generateTree = () => {
  const numNodes = Math.floor(Math.random() * 20) + 10;
  const nodes = Array.from({ length: numNodes }, (_, i) => {
    const nodeName = String.fromCharCode(i + 65);
    const value = Math.floor(Math.random() * 100);
    const numPointers = Math.floor(Math.random() * 10);
    const pointers = Array.from({ length: numPointers }, () =>
      String.fromCharCode(Math.floor(Math.random() * numNodes + 65))
    );
    return { nodeName, value, pointers };
  });
  return nodes;
};

const buildTree = async (objects, targetNodeName, visited = new Set()) => {
  if (visited.has(targetNodeName)) return null;
  visited.add(targetNodeName);
  const targetNode = objects.find((node) => node.nodeName === targetNodeName);
  if (!targetNode) return null;
  const root = { value: targetNode.value, nodeName: targetNode.nodeName };
  root.children = await Promise.all(
    targetNode.pointers.map((pointerNodeName) =>
      buildTree(objects, pointerNodeName, visited)
    )
  );
  return root;
};

const createTreeHTML = (node) => {
  if (!node) return;
  const div = document.createElement("div");
  div.classList.add("node");
  div.innerHTML = `<p>Node name: ${node.nodeName}</p><p>Value: ${node.value}</p>`;
  node.children
    .filter((child) => child !== null)
    .forEach((child) => div.appendChild(createTreeHTML(child)));
  return div;
};

const createTreeHTML2 = (node, level = 0) => {
  if (!node) return;
  const div = document.createElement("div");
  div.innerHTML = `${"&nbsp;&nbsp;".repeat(level * 2)}${
    level > 0 ? "↳ " : ""
  }Node name: ${node.nodeName} Value: ${node.value}`;
  node.children.forEach((child) =>
    div.appendChild(createTreeHTML2(child, level + 1))
  );
  return div;
};

const main = async () => {
  const nodeList = await generateTree();
  const root = await buildTree(nodeList, "A");
  const treeHTML = createTreeHTML(root);
  console.dir(`The node list is:\n${nodeList}`, {
    depth: null,
    maxArrayLength: null,
  });
  document.body.appendChild(treeHTML);
};

main();
