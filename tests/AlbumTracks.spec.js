import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';

describe('AlbumTracks', () => {
  describe('smoke tests', () => {
    it('should exist renderAlbumTracks and has to be a function', () => {
      expect(renderAlbumTracks).to.be.a('function');
    });
  });

  const data = [{
    preview_url: 'url',
    track_number: 1,
    name: 'Nowhere Fast',
    duration_ms: 238733
  }];

  const data2 = [
    {
      preview_url: 'url',
      track_number: 1,
      name: 'Nowhere Fast',
      duration_ms: 238733
    },
    {
      preview_url: 'url',
      track_number: 1,
      name: 'Nowhere Fast',
      duration_ms: 238733
    }
  ]
  const markup = `
  <div class="music" data-track-preview="url">
    <p class="music-number">1</p>
    <p class="music-title">Nowhere Fast</p>
    <p class="music-duration">238733</p>
  </div>`;

  const markup2 = `
  <div class="music" data-track-preview="url">
    <p class="music-number">1</p>
    <p class="music-title">Nowhere Fast</p>
    <p class="music-duration">238733</p>
  </div>
  <div class="music" data-track-preview="url">
    <p class="music-number">1</p>
    <p class="music-title">Nowhere Fast</p>
    <p class="music-duration">238733</p>
  </div>`;

  describe('renderAlbumTracks', () => {
    it('should render the correct markup given data', () => {
      const element = document.createElement('div');
      renderAlbumTracks(data, element);
      expect(element.innerHTML).to.be.eql(markup);

      const element2 = document.createElement('div');
      renderAlbumTracks(data2, element2);
      expect(element2.innerHTML).to.be.eql(markup2);
    });
  });
});
