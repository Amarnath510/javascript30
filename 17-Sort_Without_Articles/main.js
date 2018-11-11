const list = document.querySelector('#bands');
const STARTING_ARTICLE_REGEX = /^(a |the |an )/i;
const ARTICLE_OCCURING_ANYWHERE_REGEX = /(a |the |an )/gi; // without "g" (global) it replaces only the first occured one.

function stripArticles(word) {
  return word.replace(STARTING_ARTICLE_REGEX, '');
}

function stripArticlesAnywhere(word) {
  return word.replace(ARTICLE_OCCURING_ANYWHERE_REGEX, '');
}

console.log(stripArticlesAnywhere("The an hello a man"));

bands.sort((a, b) => {
  if (stripArticles(a) > stripArticles(b)){
    return 1;
  }

  return -1;
});

list.innerHTML = bands.map(band => {
  return `
    <li>
      <span>${band}</span>
    </li>
  `;
}).join('');
