import ChicagoDog from './images/chicago-dog.jpg'
import ChilliDog from './images/chilli-dog.jpg'
import Kielbasa from './images/kielbasa.jpg'

const menuItems = [
  {
    name: 'Chicago Dog',
    img: ChicagoDog,
    description: 'An all-beef frankfurter on a poppy seed bun topped with yellow mustard, chopped white onions, bright green sweet pickle relish, a dill pickle spear, tomato slices or wedges, pickled sport peppers and a dash of celery salt.'
  },
  {
    name: 'Chilli Dog',
    img: ChilliDog,
    description: 'A hot dog served in a bun and topped with a meat sauce, such as chili con carne. Additional toppings may include cheese, onions, and mustard.'
  },
  {
    name: 'Sweet & Spicy Kielbasa',
    img: Kielbasa,
    description: 'A polish kielbasa sausage on a poppy seed bun topped with chopped peppers, onions, ketchup and mustard.'
  }
]

function createMenuItemElement(menuItem) {
  const {name, img, description} = menuItem
  const container = document.createElement('article')
  container.classList.add('menu-item')
  const div = document.createElement('div')

  const h3 = document.createElement('h3')
  h3.textContent = name
  const p = document.createElement('p')
  p.textContent = description
  div.append(h3, p)

  const image = document.createElement('img')
  image.setAttribute('src', img)

  container.append(image, div)
  return container
}

export function loadMenuPage(parentContainer) {
  const container = document.createElement('section')
  menuItems.forEach(item => {
    container.appendChild(createMenuItemElement(item))
  })
  parentContainer.appendChild(container)
}