"use strict"


const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];



function createPostCard({ img, title, text, link }) {
  const card = document.createElement("div"),
    cardLink = document.createElement("a"),
    image = document.createElement("img"),
    cardTitle = document.createElement("h2"),
    cardDescription = document.createElement("p");

  card.classList.add("card");
  image.classList.add("card__image");
  cardTitle.classList.add("card__title");
  cardDescription.classList.add("card__description");

  image.setAttribute("src", img);
  image.setAttribute("alt", "random image");
  cardLink.setAttribute("href", link);

  cardTitle.textContent = title;
  cardDescription.textContent = text;

  card.appendChild(cardLink);
  cardLink.appendChild(image);
  cardLink.appendChild(cardTitle);
  cardLink.appendChild(cardDescription);

  return card;
}

function createCards(arr) {
  return arr.reduce((acc, el) => [...acc, createPostCard(el)], []);
}

const cards = createCards(posts);
const movie = document.querySelector(".movie");

cards.map(el => {
  movie.appendChild(el);
});