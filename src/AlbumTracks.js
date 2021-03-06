/* eslint no-param-reassign: ["error", { "props": false }] */

const createMarkup = data => data.map(track => `
  <div class="music" data-track-preview="${track.preview_url}">
    <p class="music-number">${track.track_number}</p>
    <p class="music-title">${track.name}</p>
    <p class="music-duration">${track.duration_ms}</p>
  </div>`).join('');

export default function renderAlbumTracks(data, element) {
  element.innerHTML = createMarkup(data);
}
