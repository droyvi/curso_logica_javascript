let temDinheiro = true
let estaEnsolarado = true
let carroEstaNaGaragem = true

let resultadoE = '#1 (AND) - Vai para o Shopping? '
resultadoE += temDinheiro && estaEnsolarado
console.log(resultadoE)

let resultadoOU = '#2 (OR) - Vai para o Shopping? '
resultadoOU += estaEnsolarado || carroEstaNaGaragem
console.log(resultadoOU)

console.log(true !== true)
console.log(true !== false)
console.log(false !== false)
console.log(false !== true)

console.log('Não verdadeiro ' + !true)
console.log('Não falso ' + !false)