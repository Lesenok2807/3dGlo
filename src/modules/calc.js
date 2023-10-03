const calc = () => {
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');

    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
}

export default calc;