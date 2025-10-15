const hoje = new Date();
const dayName = new Array("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
const monName = new Array("january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december");
let diaDaSemana = dayName[hoje.getDay()];
let diaDoMes = hoje.getDate();
let nomeDoMes = monName[hoje.getMonth()];
let ano = hoje.getFullYear();
let dataCompleta = `${diaDaSemana}, ${diaDoMes} de ${nomeDoMes} de ${ano}`;
if (document.getElementById("data-atual")) {
    document.getElementById("data-atual").textContent = dataCompleta;
}

function openModal() {
    console.log("OK!")
    let modal = document.getElementById("dialog1")
    modal.showModal()
}
function closeModal() {
    let modal = document.getElementById("dialog1")
    modal.close()
}

function openLogin() {
    console.log("OK!")
    let modal2 = document.getElementById("dialog2")
    modal2.showModal()
}
function closeLogin() {
    let modal2 = document.getElementById("dialog2")
    modal2.close()
}
