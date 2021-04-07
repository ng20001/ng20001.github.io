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
    //let word_wrap = document.createElement('div');
    let linebreak = document.createElement('br');
    let h3 = document.createElement('h3');
    let paragraph = document.createElement('section');

    var eventArray = towns[pageNum].events;

    h3.textContent = 'Upcoming Events';

    for (let i=0; i < eventArray.length; i++){
      let p = document.createElement('p');
      p.append(eventArray[i]);
      paragraph.appendChild(p);
    }

    console.log(towns[pageNum].events.join(linebreak));

    card.appendChild(h3);
    card.appendChild(linebreak);
    card.appendChild(paragraph);

    document.querySelector('#upcoming-event').appendChild(card);
  });

