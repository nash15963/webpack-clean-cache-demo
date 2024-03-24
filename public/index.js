const a = [{name: 'a'}, {name: 'b'}, {name: 'c'}]
const b = [...a, {name: 'd'}]

b[0].name = 'z'

console.log(a[1] === b[1])
