const botao_1 = document.getElementById('atividade_1')
const botao_2 = document.getElementById('atividade_2')
const botao_3 = document.getElementById('atividade_3')

botao_1.addEventListener('click', () => {
    window.location.href = './atividades/atividade_1.html'
})

botao_2.addEventListener('click', () => {
    window.location.href = './atividades/atividade_2.html'
})

botao_3.addEventListener('click', () => {
    window.location.href = './atividades/atividade_3.html'
})