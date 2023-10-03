const form = () => {    
    const forms = document.querySelectorAll('form');
   
    

    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = form.getAttributeNames('user_name');
            const email = form.querySelector('.form-email');
            const phone = form.querySelector('.form-phone');
            const message = form.querySelector('.mess');

            let isError = false;
            
            // if (!/[^а-яА-Я]+/g.test(name.value) && name.value !== '') {
            //     alert(' name ok!');
            // } else {
            //     isError = true;
            // }
           

            // if (/([\w]+)((([\w\.]+))+)@([\w]+)((([\w\.]+))+)[\\.][a-zA-Z]+/gi.test(email.value) && email.value !== '') {
            //     alert('email ok!');
            // } else { 
            //     isError = true;
            // }

            if (!/^\d{3}-\d{3}-\d{4}$/g.test(phone.value) && phone.value !== '') {
                alert('phone ok!');
            } else {
                isError = true;
            }   
                       
            if (!/([^а-яА-Я0-9]+)(([^а-яА-Я0-9][^\s])+)(([^а-яА-Я0-9][^\.])+)/g.test(message.value) && message.value !== '') {
                alert('ok!');
            } else {
                isError = true;
            }
     
            if (!isError) {
                alert('данные отправлены');
            }

            
        });
    });    
}

export default form;