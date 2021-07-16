const express = require('express');
const app = express();

app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Favorite movies';
app.locals.favorites = [];

app.get('/favorites', (request, response) => {
    response.status(200).send({
        favorites: app.locals.favorites
    })
})

app.post('/favorites/:id', (request, response) => {
    const newFavorite = request.body;
    app.locals.favorites.push(newFavorite);
    response.status(200).send(newFavorite);
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

//favoriting a movie:
//click on heart button from full movie view
//favorite movie is a function/prop passed down to full movie....this is invoked.
//it uses an id prop taken from Movie to search through all movies and finds one with matching id
//it takes only the title and poster path and id from this.state.movies
//a fetch call runs which posts the new favorited movie to the microservice 
//user sees a message seeing that it was successful 

//movies need a new isFavorited property 