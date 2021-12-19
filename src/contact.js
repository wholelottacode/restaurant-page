import DancingHotDog from './images/dancing-hotdog.jpeg'

export function loadContactPage(parentContainer) {
  const container = document.createElement('section')

  const img = document.createElement('img')
  img.setAttribute('src', DancingHotDog)
  img.setAttribute('width', '500')
  const h3 = document.createElement('h3')
  h3.textContent = 'Got a question?'
  const p = document.createElement('p')
  p.textContent = 'Reach out to us at 213-647-9855'

  container.append(h3, img, p)
  parentContainer.appendChild(container)
}