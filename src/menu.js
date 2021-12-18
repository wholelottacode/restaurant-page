const menuItems = [
  {
    name: 'Chicago Dog',
    img: 'https://www.mypricechopper.com/Frontend/Media/Recipes/ChicagoHotDog_Web_1110x625.jpg',
    description: 'An all-beef frankfurter on a poppy seed bun topped with yellow mustard, chopped white onions, bright green sweet pickle relish, a dill pickle spear, tomato slices or wedges, pickled sport peppers and a dash of celery salt.'
  },
  {
    name: 'Chilli Dog',
    img: 'https://media.istockphoto.com/photos/chili-dog-with-a-basket-of-fries-picture-id155352096?b=1&k=20&m=155352096&s=170667a&w=0&h=AvG2etecQ7WzL8oSFAG0hKHEiJDQH5YRzymw06CbzQM=',
    description: 'A hot dog served in a bun and topped with a meat sauce, such as chili con carne. Additional toppings may include cheese, onions, and mustard.'
  },
  {
    name: 'Sweet & Spicy Kielbasa',
    img: 'https://i.pinimg.com/736x/b1/5f/d8/b15fd89a697c8eef6a7f444eedc33cc0--hollywood-kielbasa.jpg',
    description: 'A polish kielbasa sausage on a poppy seed bun topped with chopped peppers, onions, ketchup and mustard.'
  }
]

function createMenuItemElement(menuItem) {
  const {name, img, description} = menuItem
  const container = document.createElement('article')
  const div = document.createElement('div')

  const h3 = document.createElement('h3')
  h3.textContent = name
  const p = document.createElement('p')
  p.textContent = description
  div.append(h3, p)

  const image = document.createElement('img')
  image.setAttribute('src', img)
  image.setAttribute('width', '500')

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