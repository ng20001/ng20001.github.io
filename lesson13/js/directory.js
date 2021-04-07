//const directoryURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const directoryURL = 'https://raw.githubusercontent.com/ng20001/ng20001.github.io/master/lesson13/js/directory.json';


fetch(directoryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const businesses = jsonObject['business'];

    for (let i = 0; i < businesses.length; i++) {
        let card = document.createElement('section');
        let word_wrap = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = 'Name: ' + businesses[i].name;
        p.textContent = 'Contact: ' + businesses[i].contact;
        p2.textContent = 'Website: ' + businesses[i].website;
        image.setAttribute('src', 'images/' + businesses[i].photo);
        image.alt = businesses[i].name + i;

        word_wrap.appendChild(h2);
        word_wrap.appendChild(p);
        word_wrap.appendChild(p2);
        
        card.appendChild(word_wrap);
        card.appendChild(image);

        document.querySelector('div.business-cards').appendChild(card);
    }  
  });

