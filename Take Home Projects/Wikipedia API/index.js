const API_URL = 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search='
let reset = false;
var form = document.getElementById('inputForm');
form.addEventListener('submit', handleForm)

function handleForm(event) {
    event.preventDefault();
    let query = document.getElementById('inputArticle').value.trim(); 
    query = query.replace(/ /g, '%20');

    if (query !== '') {
        const endpoint = `${API_URL}${query}`;
        getData(endpoint);
    }
}

async function getData(endpoint) {
    const response = await fetch(endpoint);

    if (!response.ok) {
        document.getElementsByClassName('articleTitle').innerText = 'Something went wrong while fetching data';
    } else {
        const data = await response.json();
        display(data);
    }
}

function display(data) {
    document.getElementById('showQuery').innerText = `Your query was: ${data[0]}`
    
    // this is how the api returns it
    const titles = data[1]; 
    const links = data[3]

    createArticles(titles, links);
}

function createArticles(titles, links) {
    const div = document.getElementById('articles'); 
    
    if (reset) {
        document.getElementById('articles').innerHTML = '';
        reset = !reset
    } 
    reset = !reset

    for (let i = 0; i < titles.length; i++) {
        let newDiv = document.createElement('div')

        let h2 = document.createElement('h2');
        let title = document.createTextNode(titles[i]);
        h2.append(title);

        let a = document.createElement('a');
        let link = document.createTextNode(links[i]);
        a.append(link);
        a.href = links[i];
        a.target = '_blank'

        newDiv.append(h2);
        newDiv.append(a);
        newDiv.className = 'singleArticle'
        div.append(newDiv);
    }
}