const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document .querySelectorAll('input');
    const phoneInput = document.querySelectorAll('input[name="user_phone"]');


    phoneInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "");
        })
        
    });

    const message = {
        loading: 'Идёт загрузка ...',
        success: 'Спасибо! Мы с Вами свяжемся ...',
        failure:'Что-то пошло не так ...'
    };
    
    const postData = async (url, data)=> {
        document.querySelector('.status').textContent = message.loading;
         let result = await fetch(url, {
            method: 'POST',
            body: data
         })
         return await result.text()
    };

    const clearInput = () => {
        inputs.forEach(item => {
            item.value = "";
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(response => {
                    console.log(response);
                    statusMessage.textContent = message.success; 
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(()=> {
                    clearInput();
                    setTimeout( () => {
                        statusMessage.remove() 
                    }, 5000);
                });
        });
    });


};

export default forms;