export function loadContactPage(parentContainer) {
  const container = document.createElement('section')

  const img = document.createElement('img')
  img.setAttribute('src', 'https://www.nicepng.com/png/detail/117-1179873_hotdog-meme-filter-dancing-dancing-hot-dog-snapchat.png')
  img.setAttribute('width', '500')
  const h3 = document.createElement('h3')
  h3.textContent = 'Got a question?'
  const p = document.createElement('p')
  p.textContent = 'Reach out to us at 213-647-9855'

  container.append(img, h3, p)
  parentContainer.appendChild(container)
}