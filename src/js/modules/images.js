const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImages = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImages);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';



    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';

            const path = target.parentNode.getAttribute('href');
            bigImages.setAttribute('src', path);
            document.body.style.overflow ='hidden';
        }

        if(target && target.classList.contains('popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow ='';
        }
    });
};


export default images;