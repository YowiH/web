let nodes = new vis.DataSet([
    {id: 1, label: "Node 1"},
    {id: 2, label: "Node 2"},
    {id: 3, label: "Node 3"},
    {id: 4, label: "Node 4"},
    {id: 5, label: "Node 5"},
]);

let edges = new vis.DataSet([
    {from: 1, to: 2, label: "Edge 1"},
    {from: 2, to: 3, label: "Edge 2"},
    {from: 3, to: 4, label: "Edge 3"},
    {from: 4, to: 5, label: "Edge 4"},
    {from: 5, to: 1, label: "Edge 5"},
]);

const container = document.getElementById("graph");
let data = {
    nodes: nodes,
    edges: edges,
};
let options = {
    nodes: {
        shape: "circle"
    },
    edges: {
        arrows: {
            to: {enabled: true, scaleFactor: 1.5}
        },
        font: {
            size: 12
        }
    },
    physics: {
        enabled: true
    }
};

let network = new vis.Network(container, data, options);
network.on("click", function(params) {
    let nodeId = params.nodes[0];
    let edgeId = params.edges[0];

    if (nodeId) {
        let node = network.body.nodes[nodeId];
        node.setOptions({color: {background: "#0078d7", border: "#0078d7"}, font: {color: "#fff"}});
    }

    if (edgeId) {
        let edge = network.body.edges[edgeId];
        edge.setOptions({color: "#0078d7" });
    } 
});