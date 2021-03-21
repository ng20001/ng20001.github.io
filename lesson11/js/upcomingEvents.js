const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var pageNum = 0;

if (document.getElementById('page-tag').textContent == "pt"){
  pageNum = 6;
} 
else if (document.getElementById('page-tag').textContent == "sp"){
  pageNum = 0;
}
else if (document.getElementById('page-tag').textContent == "fh"){
  pageNum = 2;
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    let card = document.createElement('section');
    let word_wrap = document.createElement('div');
    //let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    //let p2 = document.createElement('p');
    //let p3 = document.createElement('p');

    //h2.textContent = towns[i].name;
    h3.textContent = 'Upcoming Events';
    p.textContent = towns[pageNum].events;

    var eventArray = String(towns[pageNum].events);
    
    for (let i=0; i < eventArray.length; i++){
      word_wrap.appendChild();
    }

    //p.textContent = 'Year Founded: ' + towns[i].yearFounded;
    //p2.textContent = 'Population: ' + towns[i].currentPopulation;
    //p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

    //word_wrap.appendChild(h2);
    word_wrap.appendChild(h3);
    word_wrap.appendChild(p);
    //word_wrap.appendChild(p2);
    //word_wrap.appendChild(p3);
    
    card.appendChild(word_wrap);

    document.querySelector('#upcoming-event').appendChild(card);
  //    }
  //  }  
  });

