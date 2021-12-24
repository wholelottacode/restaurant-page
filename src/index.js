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

    /*
      Since event delegation is used we
      check if a <li> element was actually
      clicked.
    */
    let li = target.closest('li')
    if(!li) return
    const ul = document.querySelector('ul')
    if(!ul.contains(li)) return

    if(currentTab === target){
      // already on current page
      return
    }

    const tab = target.getAttribute('data-action')
    currentTab.classList.toggle('active')
    target.classList.add('active')
    currentTab = target
    clearContent()
    switch(tab) {
      case 'home':
        loadHomePage(content)
        return
      case 'menu':
        loadMenuPage(content)
        return
      case 'contact':
        loadContactPage(content)
        return
    }
  }

  function createNavbar() {
    const ul = document.createElement('ul')
    const tabs = ['Home', 'Menu', 'Contact']
    tabs.forEach(tab => {
      const li = document.createElement('li')
      li.setAttribute('data-action', tab.toLowerCase())
      li.textContent = tab
      ul.appendChild(li)      
    })
   
    ul.addEventListener('click', onTabClick)

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
