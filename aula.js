let p = {
    nome: "Maria",
    idade: 22,
    endereco: {
        logradouro: "Rua B",
        numero: 44,
        bairro: "Vila K"
    }
}
console.log(p.endereco.logradouro)
console.log(p['endereco'].numero)
console.log(p.endereco['bairro'])
console.log(p['endereco']['bairro'])
// let pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])




// //exercicio
// //implementar a filter
// //obs: não vale usar a função filter que
// //já está pronta
// function map (v, f){
//     let aux = []
//     for (let i = 0; i < v.length; i++){
//         aux.push(f(v[i]))
//     }
//     return aux
// }


// console.log (map (["abc", "def"], _ => 1))
// console.log (map (["abc", "def"], (e) => e.charAt(0)))
// function filter (v, f){
//     let aux = []
//     for (let i = 0; i < v.length; i++){
//         if (f(v[i])){
//             aux.push(v[i])
//         }
//     }
//     return aux
// }

// //tem que exibir [2]
// console.log (filter ([1, 2], (n) => n % 2 == 0))


// //ES6
// //função de alta ordem
// //higher-order function
// function f (funcao){
//     funcao()
// }

// //função de alta ordem também
// function g (){
//     function outraFuncao (){
//         console.log ("Fui produzida pela g")
//     }
//     return outraFuncao
// }

// const resultadoDaG = g()
// console.log(resultadoDaG())
// f(g())


// g()()()
// undefined()




// f (function (){
//     console.log ("Estou sendo passada para a f")
// })

// f(1)





// let umaFuncao = function (){
//     console.log ("Fui armazenada em uma variável")
// }
// umaFuncao()



// const v = [1, 2, 3]
// const f = (x) => {return x.filter (n => n % 2 == 0)}
// function outra (x){
//     return x.filter (n => n % 2 == 0)
// }
// console.log(f(v))




// const continhaQualquer = (r) => {
//     return(
//         r + r + r + r + r + r + r + r + r + r + r + r
//     ) 
// }
// console.log(continhaQualquer(1))


// const hello = () => console.log("Hello")
// hello()
// const v = [1, 2, 3]
// const f = (v) => {return v.filter (n => n % 2 == 0)}
// console.log(f(v))

// const triplo = n => {
//     return 3 * n
// }
// console.log (triplo (5))

// const dobro = (n) => 2 * n

// const dobro = (n) => {
//     return 2 * n
// }

// console.log(dobro(5))

// const triplo = function (n = 1){
//     return n * 3
// }

// console.log (triplo())
// console.log (triplo(5))

// const dobro = function (n){
//     return 2 * n
// }
// console.log(dobro(5))

// function soma (a, b){
//     return a + b
// }
// const res = soma (2, 3)
// console.log(res)

// function hello (){
//     console.log ("hello")
// }
// hello()

// function hello (nome){
//     console.log ("Hello, " + nome)
// }
// hello ("José")

// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac + v, 0)
// console.log(soma)

// const nomes = ["Ana Maria", "Antonio", "ARodrigo", "Alex", "ACristina"]

// const todosComecamComA = nomes.every(nome => nome.startsWith("A"))
// console.log(todosComecamComA)



// const res = nomes.map ((nome) => nome.length)
// console.log(res)

// const res = nomes.map ((nome) => nome.charAt(0))
// console.log(res)
//usando a map, construa um vetor que contém os comprimentos
//das strings existentes no vetor nomes
//[9, 7, 7, 4, 8]


// const apenasA = nomes.filter((n) => {
//     return n.startsWith("A")
// });
// console.log(apenasA)

// int * v = malloc(4)
// free(v)

// const numeros = [1, 2]
// console.log(numeros.length)
// numeros[4] = 2
// console.log(numeros.length)

// const numeros = [1, 2]
// numeros[0] = 2
// console.log(numeros)
// numeros = [1, 2]
// const nomes = ['Ana Maria']




// int v [10];

// const v1 = []
// console.log(v1.length)

// v1[0] = 3.4
// v1[10] = 2
// v1[2] = true
// console.log(v1.length)
// // for (let i = 0; i < v1.length; i++){
// //     console.log(v1[i])
// // }
// v1.forEach((a) => console.log (a))

// console.log ('b' + 'a' + + 'a' + 'a')
// const nome = "a"
// console.log (nome !== "")
// //== ===
// const a = []
// const b = a
// console.log (a == b)
// console.log([] == [])
// console.log ([] == false)
// console.log (null == undefined)
// console.log (null == null)
// console.log (1 == [1])
// console.log (true == 1)


// console.log (1 == "1")
// console.log (1 === "1")





// console.log ((0.1 + 0.2) === 0.3)
// console.log(0.1 + 0.2)


// const n1 = 2
// const n2 = '3'

// const n3 = n1 + n2
// console.log(n3)

// // const n4 = n1 + Number(n2)
// const n4 = n1 + +n2
// console.log (n4)


// let a = 2
// a = "abc"
// var idade = 18
// console.log ("Oi, " + nome)
// if (idade >= 18){
//     //içamento hoist
//     var nome = "João"
//     // console.log ("Parabéns, " + nome + ". Você pode dirigir.")
//     // printf ("Parabéns, %s", nome);
//     console.log (`Parabéns, ${nome}. Você pode dirigir.`)
// }
// console.log ("Até mais, " + nome)

// var linguagem = "Javascript"
// console.log ("Aprendendo, " + linguagem)
// linguagem = "Java"
// console.log ("Aprendendo, " + linguagem)


//começando...
// const nome = "José"
// const idade = 27
// nome = "Maria"
// const a

// let a = 2
// let b = 'abc'
// let endereco = `Rua K, 12`

// var c = 2 + 3
// var d = "abcd"

