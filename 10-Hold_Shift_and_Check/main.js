const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let previousChecked;
function handleClick(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === previousChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  previousChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click',  handleClick));
