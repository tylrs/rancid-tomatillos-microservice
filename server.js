const express = require('express');
const app = express();

app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Favorite movies'
app.locals.favorites = [

]

app.get('/favorites', (request, response) => {
    response.status(200).send({
        favorites: app.locals.favorites
    })
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})
