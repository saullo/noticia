$(document).ready(function() {
  init()
})

function init() {
  getNews()
}

function getNews() {
  let url = 'https://newsapi.org/v2'
  let type = 'top-headlines'
  let country = 'br'
  let apiKey = '0d36923c82c54fb586524d1d0c2be56c'
  let fullUrl = `${url}/${type}?country=${country}&pageSize=21&apiKey=${apiKey}`
  let request = new XMLHttpRequest()
  request.onload = initNews
  request.open("get", fullUrl, false)
  request.send()

  // Parse response
  let response = JSON.parse(request.responseText)
  // Add to localStorage
  addNews(response.articles)
}

function initNews() {
  let news = $('#news')
  let newsItem = $('#news-item')

  // Read from localStorage
  db.forEach((element) => {
    let item = newsItem.clone()
    let title = item.children('#title')
    let image = item.children("img")

    item.attr('key', element.id)
    title.html(element.title)
    image.attr('src', element.urlToImage)

    item.click((element) => {
      let id = element.currentTarget.getAttribute('key')
      window.location = `single.html?id=${id}`
    })

    news.append(item)
  })
  newsItem.remove()
}