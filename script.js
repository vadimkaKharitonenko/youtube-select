window.addEventListener("load", () => {
  window.addEventListener("mouseup", (e) => {
    if (!e.target.closest(".js-select")) {
      const allSelects = document.querySelectorAll(".js-select");
      allSelects.forEach(select => select.classList.remove("expanded"));
      return;
    } 
    const container = e.target.closest(".js-select");
    container.classList.toggle("expanded");
  });

  window.addEventListener("mouseup", (e) => {
    if (!e.target.closest(".js-select-item")) return;
    const container = e.target.closest(".js-select");
    const item = e.target.closest(".js-select-item");
    const input = container.querySelector(".js-select-input");
    const value = item.dataset.value;
    input.value = value;
  });
});