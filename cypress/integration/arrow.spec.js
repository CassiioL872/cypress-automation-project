it('nada agora', function () { })

const soma = () => 5 + 5

console.log(soma(1, 4))

it('a fuction test...', function () {
    console.log('Function', this)
})

it('an arrow test...', () => {
    console.log('Arrow', this)
})