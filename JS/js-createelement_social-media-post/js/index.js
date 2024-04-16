console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPostArticle = document.createElement("article");
newPostArticle.classList.add("post");

const oldParagraph = document.querySelector(".post__content");
const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent = oldParagraph.textContent;
newPostArticle.append(newParagraph);

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

const oldSpan = document.querySelector(".post__username");
const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = oldSpan.textContent;
newPostFooter.append(newSpan);

const oldLikeButton = document.querySelector(".post__button");
const newLikeButton = document.createElement("button");
newLikeButton.classList.add("post__button");
newLikeButton.textContent = oldLikeButton.textContent;
newLikeButton.addEventListener("click", handleLikeButtonClick);
newPostFooter.append(newLikeButton);

newPostArticle.append(newPostFooter);
document.body.append(newPostArticle);

// const oldPost = document.querySelector(".post");
// const newPost = oldPost.cloneNode(true);
// document.body.appendChild(newPost);
