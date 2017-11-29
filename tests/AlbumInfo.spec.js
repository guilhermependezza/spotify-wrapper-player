import { expect } from 'chai';
import renderAlbumInfo from '../src/AlbumInfo';

describe('AlbumInfo', () => {
  describe('smoke tests', () => {
    it('should exist renderAlbumInfo and has to be a function', () => {
      expect(renderAlbumInfo).to.be.a('function');
    });
  });

  describe('renderAlbumInfo', () => {
  const markup = `
    <img class="album-image" src="https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6" alt="">
    <p class="album-title">The Essential Incubus</p>
    <p class="album-artist">Incubus</p>
    <p class="album-counter">13 Músicas</p>`;

  const markup2 = `
    <img class="album-image" src="https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6" alt="">
    <p class="album-title">The Essential Incubus aehoo</p>
    <p class="album-artist">Incubus aehoo</p>
    <p class="album-counter">10 Músicas</p>`;

    const data = {
      artists: [{
        href: 'https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za',
        id: '3YcBF2ttyueytpXtEzn1Za',
        name: 'Incubus'
      }],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [{
        height: 640,
        url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
        width: 640
      }, {
        height: 300,
        url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
        width: 300
      }, {
        height: 64,
        url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
        width: 64
      }],
      name: 'The Essential Incubus',
      tracks: [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
      ]
    };

    const data2 = {
      artists: [{
        href: 'https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za',
        id: '3YcBF2ttyueytpXtEzn1Za',
        name: 'Incubus aehoo'
      }],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [{
        height: 640,
        url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
        width: 640
      }, {
        height: 300,
        url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
        width: 300
      }, {
        height: 64,
        url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
        width: 64
      }],
      name: 'The Essential Incubus aehoo',
      tracks: [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
      ]
    };

    it('should render an album info correctly', () => {
      const element = document.createElement('div');
      renderAlbumInfo(data, element);
      expect(element.innerHTML).to.be.eql(markup);

      const element2 = document.createElement('div');
      renderAlbumInfo(data2, element2);
      expect(element2.innerHTML).to.be.eql(markup2);
    });
  });
});
