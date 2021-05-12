import ISongDTO from '../dtos/ISongDTO';
import config from '../../config';

function generateDistinctArray(musics: ISongDTO[]): ISongDTO[] {
  const nums = new Set<number>();
  const arrMusics: ISongDTO[] = [];

  while (nums.size !== config.qtd_musics) {
    nums.add(Math.floor(Math.random() * 100) + 1);
  }

  nums.forEach(item => arrMusics.push(musics[item]));

  return arrMusics;
}

export default generateDistinctArray;
