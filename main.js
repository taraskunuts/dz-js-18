//смиренно прошу вибачення за затриманння дз але я не розуію як зробити 1 i 4 завдання









//2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ]
  const ingredientsList = document.getElementById('ingredients')
  const fragment = document.createDocumentFragment();
  ingredients.forEach(ingredient => {
    const li = document.createElement('li')
    li.textContent = ingredient
    fragment.appendChild(li)
  })
  ingredientsList.appendChild(fragment)
//3
const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const galleryList = document.getElementById('gallery')
  const galleryHTML = images.map(image => `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `).join('')
  galleryList.insertAdjacentHTML('beforeend', galleryHTML)
