window.addEventListener("scroll", () => {
    let footer = document.getElementById("footer");
    let position = 500;
  
    let scroll_position = window.scrollY || document.documentElement.scrollTop;
  
    scroll_position >= position
      ? (footer.style.display = "flex")
      : (footer.style.display = "none");
  });
  