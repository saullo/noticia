$(document).ready(function() {
  initDb()
})

var db

function initDb() {
  db = JSON.parse(localStorage.getItem('news'))
  let fakeData = {
    news: [
      {
        id: 1,
        title: 'Cristiano Ronaldo terá novo treinador. Allegri de saída da Juventusa',
        desc: 'A Juventus anunciou esta sexta-feira que o treinador Massimiliano Allegri vai deixar o clube no fim da presente temporada. Os portugueses Cristiano Ronaldo e João Cancelo terão assim um novo técnico na próxima época.',
        img: 'ronaldo.jpg',
        text: '"Massimiliano Allegri não se sentará no banco da Juventus na próxima época de 2019/20". Foi desta forma que o clube dirigido por Andrea Agnelli anunciou o fim do vínculo do treinador, que orientou a formação de Turim desde julho de 2014, pela qual conquistou cinto títulos consecutivos, quatro Taças e duas Supertaças de Itália. Foi ainda vice-campeão europeu por duas vezes. Allegri, de 51 anos, deixa o clube de Turim após cinco temporadas. Chegou à "Vecchia Signora" em 2014, proveniente do Milan.'
      },
      {
        id: 2,
        title: 'Cristiano Ronaldo terá novo treinador. Allegri de saída da Juventusa',
        desc: 'A Juventus anunciou esta sexta-feira que o treinador Massimiliano Allegri vai deixar o clube no fim da presente temporada. Os portugueses Cristiano Ronaldo e João Cancelo terão assim um novo técnico na próxima época.',
        img: 'ronaldo.jpg',
        text: '"Massimiliano Allegri não se sentará no banco da Juventus na próxima época de 2019/20". Foi desta forma que o clube dirigido por Andrea Agnelli anunciou o fim do vínculo do treinador, que orientou a formação de Turim desde julho de 2014, pela qual conquistou cinto títulos consecutivos, quatro Taças e duas Supertaças de Itália. Foi ainda vice-campeão europeu por duas vezes. Allegri, de 51 anos, deixa o clube de Turim após cinco temporadas. Chegou à "Vecchia Signora" em 2014, proveniente do Milan.'
      },
      {
        id: 3,
        title: 'Cristiano Ronaldo terá novo treinador. Allegri de saída da Juventusa',
        desc: 'A Juventus anunciou esta sexta-feira que o treinador Massimiliano Allegri vai deixar o clube no fim da presente temporada. Os portugueses Cristiano Ronaldo e João Cancelo terão assim um novo técnico na próxima época.',
        img: 'ronaldo.jpg',
        text: '"Massimiliano Allegri não se sentará no banco da Juventus na próxima época de 2019/20". Foi desta forma que o clube dirigido por Andrea Agnelli anunciou o fim do vínculo do treinador, que orientou a formação de Turim desde julho de 2014, pela qual conquistou cinto títulos consecutivos, quatro Taças e duas Supertaças de Itália. Foi ainda vice-campeão europeu por duas vezes. Allegri, de 51 anos, deixa o clube de Turim após cinco temporadas. Chegou à "Vecchia Signora" em 2014, proveniente do Milan.'
      },
      {
        id: 4,
        title: 'Cristiano Ronaldo terá novo treinador. Allegri de saída da Juventusa',
        desc: 'A Juventus anunciou esta sexta-feira que o treinador Massimiliano Allegri vai deixar o clube no fim da presente temporada. Os portugueses Cristiano Ronaldo e João Cancelo terão assim um novo técnico na próxima época.',
        img: 'ronaldo.jpg',
        text: '"Massimiliano Allegri não se sentará no banco da Juventus na próxima época de 2019/20". Foi desta forma que o clube dirigido por Andrea Agnelli anunciou o fim do vínculo do treinador, que orientou a formação de Turim desde julho de 2014, pela qual conquistou cinto títulos consecutivos, quatro Taças e duas Supertaças de Itália. Foi ainda vice-campeão europeu por duas vezes. Allegri, de 51 anos, deixa o clube de Turim após cinco temporadas. Chegou à "Vecchia Signora" em 2014, proveniente do Milan.'
      },
      {
        id: 5,
        title: 'Cristiano Ronaldo terá novo treinador. Allegri de saída da Juventusa',
        desc: 'A Juventus anunciou esta sexta-feira que o treinador Massimiliano Allegri vai deixar o clube no fim da presente temporada. Os portugueses Cristiano Ronaldo e João Cancelo terão assim um novo técnico na próxima época.',
        img: 'ronaldo.jpg',
        text: '"Massimiliano Allegri não se sentará no banco da Juventus na próxima época de 2019/20". Foi desta forma que o clube dirigido por Andrea Agnelli anunciou o fim do vínculo do treinador, que orientou a formação de Turim desde julho de 2014, pela qual conquistou cinto títulos consecutivos, quatro Taças e duas Supertaças de Itália. Foi ainda vice-campeão europeu por duas vezes. Allegri, de 51 anos, deixa o clube de Turim após cinco temporadas. Chegou à "Vecchia Signora" em 2014, proveniente do Milan.'
      },
      {
        id: 6,
        title: 'Cristiano Ronaldo terá novo treinador. Allegri de saída da Juventusa',
        desc: 'A Juventus anunciou esta sexta-feira que o treinador Massimiliano Allegri vai deixar o clube no fim da presente temporada. Os portugueses Cristiano Ronaldo e João Cancelo terão assim um novo técnico na próxima época.',
        img: 'ronaldo.jpg',
        text: '"Massimiliano Allegri não se sentará no banco da Juventus na próxima época de 2019/20". Foi desta forma que o clube dirigido por Andrea Agnelli anunciou o fim do vínculo do treinador, que orientou a formação de Turim desde julho de 2014, pela qual conquistou cinto títulos consecutivos, quatro Taças e duas Supertaças de Itália. Foi ainda vice-campeão europeu por duas vezes. Allegri, de 51 anos, deixa o clube de Turim após cinco temporadas. Chegou à "Vecchia Signora" em 2014, proveniente do Milan.'
      }
    ],
    trending: [
      {
        id: 1,
        uid: 1,
        title: 'Cristiano Ronaldo terá novo treinador. Allegri de saída da Juventusa',
        img: 'ronaldo.jpg',
      },
    ]
  }
  if(!db) {
    db = fakeData
  }
}

function getDbNews () {
  return JSON.parse(localStorage.getItem('news'))
}

function getDbTrending () {
  return JSON.parse(localStorage.getItem('trending'))
}

function addNews (news) {
  let id = 0
  news.forEach((element) => {
    element.id = id
    id++
  })
  localStorage.setItem('news', JSON.stringify(news))
}

function addTrending (trending) {
  let id = 0
  trending.forEach((element) => {
    element.id = id
    id++
  })
  localStorage.setItem('trending', JSON.stringify(trending))
}

