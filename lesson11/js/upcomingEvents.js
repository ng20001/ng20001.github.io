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
    let linebreak = document.createElement('br');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    h3.textContent = 'Upcoming Events';

    var eventArray = String(towns[pageNum].events);
    eventArray = eventArray.split(',');
    word_wrap.appendChild(h3);

    for (let i=0; i < eventArray.length; i++){
      p.append(eventArray[i]);
      p.appendChild(linebreak);
    }
    word_wrap.appendChild(p);
    card.appendChild(word_wrap);

    document.querySelector('#upcoming-event').appendChild(card);
  });

