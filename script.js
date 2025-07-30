document.addEventListener("DOMContentLoaded", function () {
  // Счетчик заказов
  let orderCount = 0;
  const orderButton = document.getElementById("buttonOrder");
  const orderCounter = document.getElementById("orderCount");

  orderButton.addEventListener("click", function () {
    orderCount++;
    orderCounter.textContent = orderCount;
    this.textContent = "Добавлено в корзину!";
    setTimeout(() => {
      this.textContent = "9999 ₽";
    }, 2000);
  });

  // Выбор цвета
  const colorOptions = document.querySelectorAll(".color-option");
  const colorText = document.getElementById("selectedColorText");

  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
      colorOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      const color = this.getAttribute("data-color");
      let colorName;
      switch (color) {
        case "white":
          colorName = "Белый";
          break;
        case "black":
          colorName = "Черный";
          break;
        case "gold":
          colorName = "Золотой";
          break;
        default:
          colorName = "Белый";
      }
      colorText.textContent = colorName;
    });
  });

  // Темная тема
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    this.textContent = document.body.classList.contains("dark")
      ? "🌞 Светлая тема"
      : "🌓 Темная тема";
  });

  // Добавление отзыва
  const addReviewBtn = document.getElementById("addReviewBtn");
  addReviewBtn.addEventListener("click", function () {
    const reviewsContainer = document.querySelector(".reviews");
    const newReview = document.createElement("div");
    newReview.className = "review";
    newReview.innerHTML = `
      <div class="review-header">
        <span class="review-author">Новый пользователь</span>
        <span class="review-rating">★★★★★</span>
      </div>
      <p class="review-text">${getRandomReview()}</p>
    `;
    reviewsContainer.insertBefore(newReview, addReviewBtn);
  });

  // Генератор случайных отзывов
  function getRandomReview() {
    const reviews = [
      "Этот телефон изменил мою жизнь!",
      "Скибиди туалеты выглядят потрясающе!",
      "Моя мамка наконец-то дала мне руку!",
      "Лучшее, что случалось со мной после рождения!",
      "Теперь я могу смотреть туалеты в 120 FPS!",
    ];
    return reviews[Math.floor(Math.random() * reviews.length)];
  }
});
