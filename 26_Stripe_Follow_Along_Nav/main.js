const listItems = document.querySelectorAll('.cool > li');
const dropdownBg = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.nav-bar');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.add('trigger-enter-active'), 100);
  dropdownBg.classList.add('open');

  // Get the current selected dropdown
  const activeDropdown = this.querySelector('.dropdown');
  const activeDropdownCords = activeDropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
   height: activeDropdownCords.height,
   width: activeDropdownCords.width,
   top: activeDropdownCords.top - navCoords.top,
   left: activeDropdownCords.left - navCoords.left
  };

  dropdownBg.style.setProperty('height', `${coords.height}px`);
  dropdownBg.style.setProperty('width', `${coords.width}px`);
  dropdownBg.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLeave() {
  this.classList.remove('trigger-enter-active', 'trigger-enter');
  dropdownBg.classList.remove('open');
}

listItems.forEach(item => item.addEventListener('mouseover', handleEnter));
listItems.forEach(item => item.addEventListener('mouseleave', handleLeave));
