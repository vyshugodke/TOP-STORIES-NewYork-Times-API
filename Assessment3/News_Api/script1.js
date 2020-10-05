let cont = document.createElement('div')
cont.className = 'container'

let h1 = document.createElement('h1')
h1.innerHTML = 'TOP-STORIES-NewYork Times API'

let label1 = document.createElement('label');
label1.innerHTML = 'SELECT'
label1.setAttribute('for', 'select')

let selecting = document.createElement('select');
selecting.name = 'select';
selecting.id = 'select';
let option1 = document.createElement('option');
option1.innerHTML = 'BOOKS'
let option2 = document.createElement('option');
option2.innerHTML = 'BUSINESS'
let option3 = document.createElement('option');
option3.innerHTML = 'FASHION'
let option4 = document.createElement('option');
option4.innerHTML = 'FOOD'
let option5 = document.createElement('option');
option5.innerHTML = 'HEALTH'
let option6 = document.createElement('option');
option6.innerHTML = 'INSIDER'
let option7 = document.createElement('option');
option7.innerHTML = 'MAGAZINE'
let option8 = document.createElement('option');
option8.innerHTML = 'MOVIES'
let option9 = document.createElement('option');
option9.innerHTML = 'NYREGION'
let option10 = document.createElement('option');
option10.innerHTML = 'OBITUARIES'
let option11 = document.createElement('option');
option11.innerHTML = 'OPINION'
let option12 = document.createElement('option');
option12.innerHTML = 'POLITICS'
let option13 = document.createElement('option');
option13.innerHTML = 'REALESTATE'
let option14 = document.createElement('option');
option14.innerHTML = 'SCIENCE'
let option15 = document.createElement('option');
option15.innerHTML = 'SPORTS'
let option16 = document.createElement('option');
option16.innerHTML = 'SUNDAYREVIEW'
let option17 = document.createElement('option');
option17.innerHTML = 'TECHNOLOGY'
let option18 = document.createElement('option');
option18.innerHTML = 'THEATER'
let option19 = document.createElement('option');
option19.innerHTML = 'MAGAZINE'
let option20 = document.createElement('option');
option20.innerHTML = 'TRAVEL'
let option21 = document.createElement('option');
option21.innerHTML = 'UPSHOT'
let option22 = document.createElement('option');
option22.innerHTML = 'US'
let option23 = document.createElement('option');
option23.innerHTML = 'WORLD'
let option24 = document.createElement('option');
option24.innerHTML = 'FOOD'


selecting.append(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14, option15, option16, option17, option18, option19, option20, option21, option22, option23, option24)


let divmain = document.createElement('div');
divmain.id = 'app'

cont.append(h1, label1, selecting, divmain)
document.body.append(cont);


// DOM ends here


let API_KEY = "xPeNg6lfQWPMmbHVzDM1YGamw9aucSbQ";

fetchdata(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + API_KEY
);


select.addEventListener("change", (event) => {
    let selectedOption = event.target.value;
    if (!selectedOption) return;

    let url = "https://api.nytimes.com/svc/topstories/v2/" +
        selectedOption +
        ".json?api-key=" +
        API_KEY;
    fetchdata(url);
    app.innerHTML = "";

});


async function fetchdata(name) {
    try {

        let response = await fetch(name)
        let data = await response.json()
        if (data.status !== "OK") {
            throw new Error("Something went wrong");

        }

        for (let i = 0; i < data.results.length; i++) {
            let row1 = divrow();
            let col_one = col1();
            col_one.setAttribute('class', 'col-lg-8 col-md-8 col-sm-8')
            let cdiv = parent();
            let cdiv3 = section(data.results[i]["section"]);

            let image = (data.results[i]["multimedia"])
            let col_two = col1();
            col_two.setAttribute('class', 'col-lg-4 col-md-4 col-sm-4')
            let mainimg = img(image[4].url)

            let datee = date(data.results[i]["updated_date"])

            let titlee = titlef(data.results[i]["title"])

            let abstract1 = abstractf(data.results[i]["abstract"])

            let continue1 = continuer(data.results[i]['url'])
            continue1.target = '_blank'
            col_one.append(cdiv3, titlee, datee, abstract1, continue1)
            col_two.append(mainimg)
            row1.append(col_one, col_two);
            cdiv.append(row1)
            app.append(cdiv);


        }
    } catch (err) {
        console.log(err);
    }
}


function col1() {
    element = document.createElement('div')

    return element;
}



function date(mydate) {
    element = document.createElement('div');
    element.setAttribute('class', 'date-card')
    element.innerHTML = mydate
    return element;
}

function continuer(link) {
    element = document.createElement('a');
    element.setAttribute('href', link)
    element.setAttribute('class', 'continue')
    element.innerHTML = 'Continue reading'
    element.value = 'Continue reading'
    return element;
}

function divrow() {
    let element = document.createElement('div');
    element.setAttribute('class', 'row')
    return element;
}

function img(img) {
    element = document.createElement('img');
    element.setAttribute('class', 'img-thumbnail card-img')
    element.setAttribute('src', img)
    return element;
}

function abstractf(abstract) {
    element = document.createElement('p');
    element.setAttribute('class', 'abstract-card')
    element.innerHTML = abstract
    return element;
}

function parent() {
    element = document.createElement('div');
    element.setAttribute('class', 'card ')
    return element;
}

function section(section) {
    element = document.createElement('h5');
    element.setAttribute('class', 'section-card ')
    element.innerHTML = section.toUpperCase();
    return element;
}

function titlef(title) {
    element = document.createElement('h4');
    element.setAttribute('class', 'title-card')
    element.innerHTML = title
    return element
}