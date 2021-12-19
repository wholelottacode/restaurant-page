import { loadContactPage } from './contact'
import { loadHomePage } from './home'
import { loadMenuPage } from './menu'

import './style.css'

const displayController = (function() {
  const body = document.querySelector('body')
  const content = document.querySelector('#content')
  let currentTab

  function clearContent() {
    if(content.firstChild) {
      content.removeChild(content.firstChild)
    }
  }

  function onTabClick(e) {
    const target = e.target
    const tab = target.textContent
    currentTab.classList.toggle('active')
    target.classList.add('active')
    currentTab = target
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
      li.addEventListener('click', onTabClick)
      li.textContent = tab
      ul.appendChild(li)      
    })
    currentTab = ul.firstChild
    currentTab.classList.add('active')
    body.insertBefore(ul, content)
  }

  function setup() {
    createNavbar()
    clearContent()
    loadHomePage(content)
  }

  return {
    setup
  }
})()

displayController.setup()
