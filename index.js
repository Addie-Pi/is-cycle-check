function solution(A, B){
    const length = A.length;

    // create Map to represent the graph and store the vertex 
    const graph = new Map();
    for(let i = 0; i < length; i++){
        if(!graph.has(A[i])){
            graph.set(A[i], [])
        }
        graph.get(A[i]).push(B[i])
    }

    // check if each vertex one edge
    // cause the number is from 1 to N, started from 1
    for(let i = 1; i <= length; i++){
        if(!graph.has(i) || graph.get(i).length !== 1){
            // if any vertex does not have exactly one edge, return false
            return false;
        }
    }

    // check if the graph is a cycle
    // start from the first vertex and traverse the graph
    const visited = new Set();
    let current = A[0]

    while(!visited.has(current)){
        visited.add(current)
        console.log('graph.get(current) ', graph.get(current))
        current = graph.get(current)[0];
    }

    // check if we visited all vertices and returned to the start
    // if visited size is equal to length and current is the first vertex
    return visited.size === length && current === A[0]; 
}

module.exports = solution;