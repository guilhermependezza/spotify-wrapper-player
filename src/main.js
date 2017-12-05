import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-musics');

albums.then(data => data.json())
  .then((data) => {
    renderAlbums(data.albums.items, albumList);
    return data.albums.items[0].id;
  })
  .then(albumId => spotify.album.getAlbum(albumId))
  .then(albumDataRaw => albumDataRaw.json())
  .then(albumData => renderAlbumInfo(albumData, albumInfo))
  .then(({ tracks }) => renderAlbumTracks(tracks.items, albumTracks));
