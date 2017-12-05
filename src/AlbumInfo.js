/* eslint no-param-reassign: ["error", { "props": false }] */

const createMarkup = data => `
    <img class="album-image" src="${data.images[0].url}" alt="">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.tracks.total} Músicas</p>`;

export default function renderAlbumInfo(data, el) {
  const markup = createMarkup(data);
  el.innerHTML = markup;
  return data;
}
