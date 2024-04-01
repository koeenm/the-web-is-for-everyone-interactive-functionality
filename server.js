import express from 'express'
import fetchJson from './helpers/fetch-json.js'

// dit is een array van objects waarin de id en like# zit, eg. [{ id: 'bliep', likes: 42}]
let likes = []

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.set('port', process.env.PORT || 8000)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

const apiUrl = 'https://fdnd-agency.directus.app/items/dh_services'
const relatedUrl = await fetchJson(apiUrl)

// => betekend hetzelfde als function
app.get('/', (request, response) => {
    response.render('index')
})

// een post route voor article
//check of de id al in de array staat en tel er 1 bij op, of maak een nieuw object
// stuur de gebruiker door naar het betreffende artikel

app.post('/detail/:id', (request, response) => {
  let huidig = l
})

app.get('/detail/:id', function(request, response) {
  fetchJson(apiUrl + '/' + request.params.id).then((initiatiefDetail) => {
    response.render('detail', {
      initiatief: initiatiefDetail.data,
      relatedContent: relatedUrl.data
    })
    console.log(initiatiefDetail)
  })
})

app.get('/vraag', function (request, response) {
  fetchJson(apiUrl + '?filter={%22type%22:%22vraag%22}').then((apiData) => {
    response.render('vraag', {
        initiatiefVraag: apiData.data
      })
      console.log(apiData)
    })
  })

app.get('/aanbod', function (request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/dh_services?filter={%22type%22:%22aanbod%22}').then((apiData) => {
    response.render('aanbod', {
      initiatiefAanbod: apiData.data
    })
    console.log(apiData)
  })
})

app.get('/aanmelden', function(request,response) {
    response.render('aanmelden')
})

app.get('/faq', function(request, response) {
  response.render('faq')
})

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})



