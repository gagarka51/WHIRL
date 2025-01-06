const accordions = Array.from(document.querySelectorAll(".accordion_item"));

accordions.forEach((accordion) => {
    accordion.addEventListener("click", accordionHandler);
});

function accordionHandler(e) {
    e.preventDefault();
    let currentAccordion = e.target.closest(".accordion_item");
    let currentContent = e.target.nextElementSibling;
    currentAccordion.classList.toggle("active");
    if (currentAccordion.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}