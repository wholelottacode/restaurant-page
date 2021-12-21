import Obama from './images/obama-hot-dog.png'

export function loadHomePage(parentContainer) {
  const container = document.createElement('section')
  container.classList.add('home')
  const h1 = document.createElement('h1')
  h1.textContent = 'Glizzy Gang'

  const img = document.createElement('img')
  img.setAttribute('src', Obama)
  img.setAttribute('width', '500')

  const p = document.createElement('p')
  p.textContent = 'The best glizzys you will ever taste'

  container.append(h1, img, p)
  parentContainer.appendChild(container)
}