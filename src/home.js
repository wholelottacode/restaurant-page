export function loadHomePage() {
  const content = document.querySelector('#content')

  const container = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.textContent = 'Glizzy Gang'

  const img = document.createElement('img')
  img.setAttribute('src', 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/918/516/Obama_Hot_Dog-1.jpg?ve=1&tl=1')
  img.setAttribute('width', '500')

  const p = document.createElement('p')
  p.textContent = 'The best glizzys you will ever taste'

  container.append(h1, img, p)
  content.appendChild(container)
}