const tabs = (headerSelector, tabsSelector, contentsSelector, classActive, display = 'block') => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const content = document.querySelectorAll(contentsSelector);
    

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tabs[i].classList.add(classActive);
    }
    showTabContent();

    header.addEventListener("click", (e) => {
        const target = e.target;

        // Проверяем имеент ли таргет клаасс tabsSelector и replace удаляем точку в названии классса т.к. classList уже знает что это будет класс
        if(target && (target.classList.contains(tabsSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))){
            tabs.forEach((item ,i) => {
                if(target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        };
    });

};

export default tabs;