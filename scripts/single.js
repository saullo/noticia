$(document).ready(() => {
  init()
})

function init() {
  getNews()
  getTrending()
}

function getNews() {
  // Get url params
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id')

  db.forEach((element) => {
    if (element.id == id) {
      showNews(element)
    }
  })
}

function showNews(element) {
  let news = $('#news')
  let title = news.children('#title')
  let img = news.children('#img')
  let text = news.children('#text')
  let desc = news.children('#desc')

  title.html(element.title)
  img.attr('src', element.urlToImage)
  text.html(element.content)
  desc.html(element.description)
  document.title = element.title
}

function getTrending() {
  let url = 'https://newsapi.org/v2'
  let type = 'top-headlines'
  let apiKey = '0d36923c82c54fb586524d1d0c2be56c'
  let fullUrl = `${url}/${type}?country=br&pageSize=5&apiKey=${apiKey}`
  let request = new XMLHttpRequest()
  request.onload = initTrending
  request.open("get", fullUrl, false)
  request.send()

  // Parse response
  let response = JSON.parse(request.responseText)
  console.log(response)
  // Add to localStorage
  addTrending(response.articles)
}

function initTrending() {
  let trendings = $('#trendings')
  let trending = $('#trending')

  let dbTrending = getDbTrending()

  dbTrending.forEach((element) => {
    let item = trending.clone()
    
    item.html(element.title)
    item.attr('href', `single.html?id=${element.id}`)

    trendings.append(item)
  })

  trending.remove()
}