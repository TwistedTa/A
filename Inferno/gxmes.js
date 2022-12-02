const elemsrendered = () => {
  document.querySelectorAll("h2").forEach(el => el.addEventListener("click",function() {
  location.href = "../play/?" + this.textContent
}))

}
