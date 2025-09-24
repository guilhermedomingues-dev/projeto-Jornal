const hoje = new Date();
const dayName = new Array("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
const monName = new Array("january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december");
let diaDaSemana = dayName[hoje.getDay()];
let diaDoMes = hoje.getDate();
let nomeDoMes = monName[hoje.getMonth()];
let ano = hoje.getFullYear();
let dataCompleta = `${diaDaSemana}, ${diaDoMes} de ${nomeDoMes} de ${ano}`;
document.getElementById("data-atual").textContent = dataCompleta;

const openButtons=document.querySelectorAll('.open-modal');
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        console.log(modalId);
    });
});