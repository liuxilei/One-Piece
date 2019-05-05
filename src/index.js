function* testGenerator() {
    yield '1';
    yield '2';
    return '3';
}
let g = testGenerator();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
