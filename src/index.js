function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searching-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#searching-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
