const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());
app.set('port', process.env.PORT || 3000)
app.locals = {
    title: 'Favorites',
    favorites: []
}

app.post('/movies/:id', (request, response) => {

})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})
