const comments = [
  {
    name: "Mohammad",
    roll: "Backend developer",
    photo: "assets/businessman1.png",
    text: "Working with Sajjad was honestly one of the best experiences I've had with a front-end developer. His attention to detail is crazy good — every section, margin, color, and interaction feels intentional and well-designed. He took my idea and turned it into something way cleaner and more modern than I expected. The website feels fast, responsive, and extremely user-friendly. I'm genuinely impressed with his creativity, communication, and the speed of his work.",
    stars: 5,
  },
  {
    name: "Emily Carter",
    roll: "UX Designer",
    photo: "assets/businesswoman1.png",
    text: "I didn't expect the website to come out this polished. Sajjad really knows how to combine clean design with solid front-end skills. He constantly asked for feedback, made updates quickly, and explained everything clearly. What I loved most is how he understands modern UI/UX — the layouts, spacing, and color choices are perfectly balanced. If you need someone reliable who actually cares about quality, he's the one.",
    stars: 5,
  },
  {
    name: "David Thompson",
    roll: "Project Manager",
    photo: "assets/businessman2.png",
    text: "Sajjad delivered a design that genuinely exceeded my expectations. The structure of the pages is clean, the animations feel smooth, and everything works perfectly on mobile. You can tell he follows best practices and knows what makes a website look professional. I've worked with a few developers before, but the level of consistency and precision he brings is on another level. Absolutely recommend working with him.",
    stars: 4,
  },
  {
    name: "Sarah Mitchell",
    roll: "StartUp Founder",
    photo: "assets/businesswoman2.png",
    text: "What impressed me the most about Sajjad is his ability to transform even simple ideas into a modern, high-quality design. He understands UI/UX standards extremely well and builds layouts that feel natural and visually appealing. The communication was excellent, and he delivered every part of the project earlier than expected. The final result looks like a website built by someone with years of experience. Truly outstanding work.",
    stars: 3,
  },
  {
    name: "James Walker",
    photo: "assets/businessman3.png",
    roll: "Marketing Specialist",
    text: "I had a great experience collaborating with Sajjad on my project. From the first draft to the final version, he was focused, organized, and fully dedicated to delivering perfect results. The design is minimal, clean, and very professional — exactly what I wanted. He also paid attention to the smallest details and made the whole process smooth and stress-free. I will definitely work with him again in the future.",
    stars: 5,
  },
];

const commentName = document.querySelector(".name");
const commentText = document.querySelector(".comment-text");
const commentRoll = document.querySelector(".roll");
const commentphoto = document.querySelector(".comment-img");
const commentStars = document.querySelector(".stars");
let currentIndex = 0;

function changeComment() {
  setInterval(() => {
    currentIndex++;
    if (currentIndex >= comments.length) {
      currentIndex = 0;
    }
    commentName.textContent = comments[currentIndex].name;
    commentRoll.textContent = comments[currentIndex].roll;
    commentText.textContent = comments[currentIndex].text;
    commentphoto.src = comments[currentIndex].photo;
    commentStars.innerHTML =
      "<span>Rating : </span>" +
      '<img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"></img>'.repeat(
        comments[currentIndex].stars
      ) +
      '<img src="assets/star-e.png"></img>'.repeat(
        5 - comments[currentIndex].stars
      );
  }, 4000);
}

changeComment();
