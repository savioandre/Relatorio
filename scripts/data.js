document.querySelector('.btn_name').addEventListener('click', () => {

    let one = document.querySelector('.name input').value;
    if (one.length <= 0) {
        one = false;
    }
    let two = document.querySelector('#img');
    if (two === null || two.length === 0) {
        two = false;
    }
    let three;
    const steps = [one, two, three];
    let cor = 0;


    if (!steps[cor]) {
        console.log(steps[cor] + ' Error');
        error()
    } else {
        cor = +1;
    };

    function error() {
        document.querySelector('span._on').style.background = "#ff8d8d";
        document.querySelector('.btn_name').setAttribute('disabled', 'disabled');
    }
})

document.querySelector('#ok').addEventListener('click', () => {
    const values = {
        type: document.querySelector('#select').value,
        time: document.querySelector('#hours').value,
        publications: document.querySelector('#publics').value,
        revisits: document.querySelector('#revisits').value,
        videos: document.querySelector('#videos').value,
        studies: document.querySelector('#study').value,
    };

    if (values.time.length === 1) {
        values.time = `0${values.time}:00`;
    } else if (values.time.length === 2) {
        values.time = `${values.time}:00`;
    } else if (values.time.length === 3) {
        values.time = values.time.slice(0, 2) + ':' + values.time.slice(2, 10) + '0';
        console.log(`${values.time.slice(0, 2)}:${values.time.slice(2, 10)}0`);
    } else if (values.time.length === 0) {
        values.time = `00:00`;
    } else values.time = values.time.slice(0, 2) + ':' + values.time.slice(2, 10);

    if (values.publications.length === 1) {
        values.publications = `0${values.publications}`;
    } else values.publications = `00`;

    if (values.revisits.length === 1) {
        values.revisits = `0${values.revisits}`;
    } else values.revisits = `00`;

    if (values.videos.length === 1) {
        values.videos = `0${values.videos}`;
    } else values.videos = `00`;

    if (values.studies.length === 1) {
        values.studies = `0${values.studies}`;
    } else values.studies = `00`;

    const localMain = document.createElement('div');
    const localActivities = document.createElement('div');
    const view = document.createElement('div');
    const type = document.createElement('h1');
    const time = document.createElement('span');
    const publications = document.createElement('span');
    const revisits = document.createElement('span');
    const videos = document.createElement('span');
    const studies = document.createElement('span');

    const gerDate = () => {
        const date = new Date;
        let day = date.getDate().toString();
        let month = date.getMonth().toString();
        const year = date.getFullYear().toString();

        if (day.length === 1) {
            day = `0${day}`
        }

        if (month.length === 1) {
            month = `0${month}`
        }

        return `${day}/${month}/${year}`
    };

    const body = `
    <div class="view">
        <h1 class="txt_title">${values.type} - ${gerDate()}</h1>
        <div class="main_activity">
            <div class="act">${values.time} Horas</div>
            <div class="act">${values.publications} Publicações</div>
            <div class="act">${values.revisits} Revisitas</div>
            <div class="act">${values.videos} Vídeos</div>
            <div class="act">${values.studies} Estudos</div>
        </div>
    </div>`

    document.querySelector('.close').click();

    localMain.classList.add('main_act');
    view.classList.add('view');
    type.innerText = values.type;
    time.innerText = values.time;
    publications.innerText = values.publications;
    revisits.innerText = values.revisits
    videos.innerText = values.videos;
    studies.innerText = values.studies;

    view.innerHTML = body;
    localActivities.appendChild(view);
    localMain.appendChild(localActivities);
    document.querySelector('main#main_acts').appendChild(localMain);

    const main = document.querySelector('main');
    if (main.childElementCount > 0) {
        document.querySelector('.msg').style.display = 'none';
    } else document.querySelector('.msg').style.display = 'block';
});