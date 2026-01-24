const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        window.location.href = 'https://info.medx.med.br/';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.s5button');

    botoes.forEach(s5button => {
        s5button.addEventListener('click', () => {
            window.open(
                'https://wa.me/5521972745156?text=Olá,%20quero%20tirar%20duvidas',
                '_blank'
            );
        });
    });
});




