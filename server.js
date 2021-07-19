const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3001);
app.locals.title = 'Favorite movies';
app.locals.favorites = [];

app.get('/favorites', (request, response) => {
    response.status(200).send({
        favorites: app.locals.favorites
    })
})

app.post('/favorites', (request, response) => {
    const newFavorite = request.body;
    const reqParams = ['id', 'title', 'poster_path'];
    let error = false;
    reqParams.forEach((param, index) => {
        if (!newFavorite[param]) {
            response.status(422).send('Please send all required data');
            error = true;
        } else if (index === 2 && !error) {
            app.locals.favorites.push(newFavorite);
            response.status(200).send(newFavorite);
        }
    })
})

app.delete('/favorites', (request, response) => {
    if ((typeof request.body.id) === 'number') {
        let id = parseInt(request.body.id)
        app.locals.favorites.find((movie, index, favorites) => {
            if (movie.id === id) {
                favorites.splice(index, 1)
                return true;
            } else {
                return false;
            }
        })
        response.status(200).send({favorites: app.locals.favorites});
    } else {
        response.status(422).send('Incorrect submission');
    }
})
app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})
