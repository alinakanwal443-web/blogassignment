const filterButtons = document.querySelectorAll(".filter");
const storyCards = document.querySelectorAll(".card");
const emptyMessage = document.getElementById("emptyMessage");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    let visibleCards = 0;

    storyCards.forEach((card) => {
      const showCard =
        button.dataset.filter === "all" ||
        card.dataset.category === button.dataset.filter;

      card.hidden = !showCard;

      if (showCard) {
        visibleCards++;
      }
    });

    emptyMessage.style.display = visibleCards ? "none" : "block";
  });
});

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("subscribeForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const toast = document.getElementById("toast");
  toast.textContent =
    "Thanks for subscribing! Connect this form to an email service to receive signups.";
  toast.classList.add("show");

  event.target.reset();

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
});