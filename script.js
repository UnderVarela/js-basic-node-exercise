function clonarParrafo () {
  if (document.querySelector('.parrafo .mi-parrafo')) return
  const pEL = document.createElement('p')
  pEL.setAttribute('class','mi-parrafo')
  pEL.innerHTML = 'Vamos a crear nodos. Para ello utilizaremos el método <strong>document.createElement()</strong'
  document.querySelector('.parrafo').append(pEL)
}

function clonarLista () {
  if (document.querySelector('.lista .mi-lista')) return
  const pUL = document.createElement('ul')
  pUL.setAttribute('class','mi-lista')
  pUL.innerHTML = `
  <li>HTML 5
                  <ul>
                      <li>Formularios</li>
                      <li>Enlaces</li>
                      <li>Imágenes</li>
                  </ul>
              </li>
              <li>JavaScript
                  <ul>
                      <li>let/const/var</li>
                      <li>Arrays</li>
                      <li>Nodos</li>
                  </ul>
              </li>
              <li>Accesibilidad
                  <ul>
                      <li>Formularios</li>
                  </ul>
              </li>
  `
  document.querySelector('.lista').append(pUL)
}



document.querySelector('#form1')
  .addEventListener('submit', (e) =>  {
    e.preventDefault()
    clonarParrafo()
  })

  document.querySelector('#form2')
  .addEventListener('submit', (e) =>  {
    e.preventDefault()
    clonarLista()
  })

