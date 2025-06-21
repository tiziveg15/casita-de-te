document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelectorAll(".post");
  posts.forEach((post, index) => {
    setTimeout(() => post.classList.add("visible"), 200 * index);
  });
});
