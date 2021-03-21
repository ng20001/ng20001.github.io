const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if (i == 1 || i == 5 || i == 6) {
        let card = document.createElement('section');
        let word_wrap = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        p.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p2.textContent = 'Population: ' + towns[i].currentPopulation;
        p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.alt = towns[i].name + i;

        word_wrap.appendChild(h2);
        word_wrap.appendChild(h3);
        word_wrap.appendChild(p);
        word_wrap.appendChild(p2);
        word_wrap.appendChild(p3);
        
        //card.appendChild(h2);
        //card.appendChild(h3);
        //card.appendChild(p);
        //card.appendChild(p2);
        //card.appendChild(p3);
        card.appendChild(word_wrap);
        card.appendChild(image);

        document.querySelector('div.towns-cards').appendChild(card);
      }
    }  
  });

