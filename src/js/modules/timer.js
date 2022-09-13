const timer = (id, deadline) => {

    const addZero = (num) => {
        if(num <= 9){
            return `0${num}`;
        } else {
            return num;
        }
    }
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const s = Math.floor((t/1000) % 60);
        const m = Math.floor((t/(1000 * 60)) % 60);
        const h = Math.floor((t/(1000 * 60 * 60)) % 24);
        const d = Math.floor(t/(1000 * 60 * 60 * 24));

        return {
            'total': t,
            'seconds': s,
            'minutes': m,
            'hours': h,
            'days': d
        };
    }
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector);
        const seconds = timer.querySelector('#seconds');
        const minutes = timer.querySelector('#minutes');
        const hours = timer.querySelector('#hours');
        const days = timer.querySelector('#days');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            seconds.textContent = addZero(t.seconds);
            minutes.textContent = addZero(t.minutes);
            hours.textContent = addZero(t.hours);
            days.textContent = addZero(t.days);

            if(t.total <= 0) {
                seconds.textContent = "00";
                minutes.textContent = "00";
                hours.textContent = "00";
                days.textContent = "00";

                clearInterval(timeInterval);
            }

        }
    }

    setClock(id, deadline);

};

export default timer;

