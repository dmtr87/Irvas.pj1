const tabs = (headerSelector, tabsSelector, contentsSelector, classActive) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const content = document.querySelectorAll(contentsSelector);
    

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove(classActive);
        });
    };

    function showTabContent(i) {
        content[i].style.display = "block";
        tabs[i].classList.add(classActive);
    };
   


};

export default tabs;