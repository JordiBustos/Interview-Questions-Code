const API_URL = 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search='
let first = 0;
var form = document.getElementById('inputForm');
form.addEventListener('submit', handleForm);

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
    const titles = data[1].reverse(); 
    const links = data[3].reverse();
    let length = titles.length - 1;

    createArticles(titles, links, length, first++);
}

const div = document.getElementById('articles');

function createArticles(titles, links, i, first) {
    if (titles.length == 0 || links.length == 0) return;
    if (first > 1) {
        document.getElementById('articles').innerHTML = '';
    }
    
    let h2 = createSubtitle(titles[i]); 
    let a = createLink(links[i]);

    let newDiv = createNewDiv(h2, a);

    div.append(newDiv);    
    i--;
    createArticles(titles.slice(0, titles.length - 1), links.slice(0, links.length - 1), i)
}

function createNewDiv(h2, a) {
    let newDiv = document.createElement('div');
    newDiv.append(h2); newDiv.append(a);
    newDiv.className = 'singleArticle';

    return newDiv;
}

function createSubtitle(title) {
    let h2 = document.createElement('h2');
    let newTitle = document.createTextNode(title);
    h2.append(newTitle);

    return h2;
}

function createLink(link) {
    let a = document.createElement('a');
    let newLink = document.createTextNode(link);
    a.append(newLink);
    a.href = link;
    a.target = '_blank';

    return a
}