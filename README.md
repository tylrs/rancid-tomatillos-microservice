
# Rancid Tomatillos Microservice 

This API was built with Express for the project [Rancid Tomatillos](https://github.com/tylrs/rancid-tomatillos). 

## Badges 

<p style="text-align: center;"> 
    <img alt="JavaScript Badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" />
    <img alt="Express Badge" src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square" />
</p>


## Features

- Allows developers to have a favorite page on their website using a route to `/favorites`
- The server allows for developers to post and delete submitted favorites.
## Installation

Clone the repository and install dependencies

```szh 
git clone git@github.com:tylrs/rancid-tomatillos-microservice.git
cd rancid-tomatillos-microservice
npm install 
```

## Deployment

To deploy, `cd` into the project folder and run

```zsh
npm start
``` 

## API Documentation

| Purpose   | URL      | Verb   | Request Body |
| :-------- | :------- | :------- | :------------ |
| Get all favorites | /favorites | GET |  `{"id": <Integer>, "title": <String> , "posterPath": <URL Path>}` |
| Add to favorites | /favorites | POST |  `{"id": <Integer>, "title": <String> , "posterPath": <URL Path>}`
| Remove from favoites | /favorites | DELETE | An new array of favorites (no response body).


## Authors

- [@Taylor Galloway](https://github.com/tylrs)
- [@Andrew Vallejo](https://github.com/andrewvallejo)  
