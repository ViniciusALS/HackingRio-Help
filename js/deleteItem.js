function deleteItem(event) {
    event.preventDefault();
    let target = event.target.parentElement.parentElement;

    target.style.display = "none";
}
