import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');

albums.then(data => data.json())
  .then((data) => {
    renderAlbums(data.albums.items, albumList);
    return data.albums.items[0].id;
  })
  .then(albumId => spotify.album.getAlbum(albumId))
  .then(albumDataRaw => albumDataRaw.json())
  .then(albumData => renderAlbumInfo(albumData, albumInfo));
