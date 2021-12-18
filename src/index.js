import {loadHomePage} from './home'

const displayController = (function() {
  const content = document.querySelector('#content')

  function onTabClick(e) {
    const tab = e.target.textContent
    switch(tab) {
      case 'Home':
        loadHomePage()
        return
    }
  }

  function createNavbar() {
    const ul = document.createElement('ul')
    const tabs = ['Home', 'Menu', 'Contact']
    tabs.forEach(tab => {
      const li = document.createElement('li')
      // write base styles for li and append the class
      li.style.cursor = 'pointer'
      li.addEventListener('click', onTabClick)
      li.textContent = tab
      ul.appendChild(li)      
    })

    // set first tab (Home) as default selected
    content.appendChild(ul)
  }

  function setup() {
    createNavbar()
  }

  return {
    setup
  }
})()

displayController.setup()
// loadHomePage()
