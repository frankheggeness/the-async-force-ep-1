'use strict';
// person4 name
const person4Req = new XMLHttpRequest();

function person4ReqListener() {
  let responseData = JSON.parse(this.responseText);
  console.log(responseData);
  person4Name.innerHTML = responseData.name;
  function person4HomeworldReqListener() {
    let responseData = JSON.parse(this.responseText);
    console.log(responseData);
    person4HomeWorld.innerHTML = responseData.name;
  }
  const person4HomeWorldReq = new XMLHttpRequest();
  person4HomeWorldReq.addEventListener('load', person4HomeworldReqListener);

  person4HomeWorldReq.open('GET', responseData.homeworld);
  person4HomeWorldReq.send();
}

person4Req.addEventListener('load', person4ReqListener);

person4Req.open('GET', 'https://swapi.co/api/people/4/');
person4Req.send();

// person14

const person14Req = new XMLHttpRequest();

function person14ReqListener() {
  let responseData = JSON.parse(this.responseText);
  console.log(responseData);
  person14Name.innerHTML = responseData.name;
  function person14SpeciesReqListener() {
    let responseData = JSON.parse(this.responseText);
    console.log(responseData);
    person14Species.innerHTML = responseData.name;
  }
  const person14HomeWorldReq = new XMLHttpRequest();
  person14HomeWorldReq.addEventListener('load', person14SpeciesReqListener);

  person14HomeWorldReq.open('GET', responseData.species);
  person14HomeWorldReq.send();
}

person14Req.addEventListener('load', person14ReqListener);

person14Req.open('GET', 'https://swapi.co/api/people/14/');
person14Req.send();

// films

const filmsReq = new XMLHttpRequest();

function filmsReqListener() {
  let responseData = JSON.parse(this.responseText).results;
  console.log(responseData);

  for (let i = 0; i < responseData.length; i++) {
    let newList = document.createElement('li');
    newList.innerHTML = responseData[i].title;
    filmList.appendChild(newList);
  }
}

filmsReq.addEventListener('load', filmsReqListener);

filmsReq.open('GET', 'https://swapi.co/api/films/');
filmsReq.send();
