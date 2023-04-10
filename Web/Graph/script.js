let nodes = new vis.DataSet([
    {id: 1, label: "Yowi"},
    {id: 2, label: "Happiness"},
    {id: 3, label: "Fit in socially"},
    {id: 4, label: "Pride"},
    {id: 5, label: "Health"},
    {id: 6, label: "Yowi's Website"}
]);

let edges = new vis.DataSet([
    {from: 3, to: 2},
    {from: 4, to: 2},
    {from: 5, to: 2},
    {from: 1, to: 6},
    {from: 6, to: 4}
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