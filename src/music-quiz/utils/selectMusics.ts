import ISongDTO from '../dtos/ISongDTO';
import config from '../../config';
import musicsOriginal from '../musics/musics';

function generateDistinctArray(musics: ISongDTO[]): ISongDTO[] {
  const nums = new Set<number>();
  const arrMusics: ISongDTO[] = [];

  while (nums.size !== config.qtd_musics) {
    nums.add(Math.floor(Math.random() * (musicsOriginal.length - 1)) + 1);
  }

  nums.forEach(item => arrMusics.push(musics[item]));

  console.log(nums);

  return arrMusics;
}

export default generateDistinctArray;
