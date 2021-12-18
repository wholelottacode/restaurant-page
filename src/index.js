import { loadContactPage } from './contact'
import { loadHomePage } from './home'
import { loadMenuPage } from './menu'

const displayController = (function() {
  const body = document.querySelector('body')
  const content = document.querySelector('#content')

  function clearContent() {
    if(content.firstChild) {
      content.removeChild(content.firstChild)
    }
  }

  function onTabClick(e) {
    const tab = e.target.textContent
    clearContent()
    switch(tab) {
      case 'Home':
        loadHomePage(content)
        return
      case 'Menu':
        loadMenuPage(content)
        return
      case 'Contact':
        loadContactPage(content)
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
    body.insertBefore(ul, content)
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
