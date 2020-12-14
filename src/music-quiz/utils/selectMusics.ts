import ISongDTO from '../dtos/ISongDTO';

function generateRandomNumberAndVerifyEqual(numbersRandom: number[]): number {
  const randomNumber = Math.floor(Math.random() * (94 - 0) + 0);

  const findNumber = numbersRandom.find(number => number === randomNumber);

  if (!findNumber) {
    return randomNumber;
  }
  return generateRandomNumberAndVerifyEqual(numbersRandom);
}

function selectMusics(musics: ISongDTO[]): ISongDTO[] {
  const selectedMusics = [];
  const numbersRandom = [];

  for (let i = 0; i < 2; i += 1) {
    const randomNumber = generateRandomNumberAndVerifyEqual(numbersRandom);

    numbersRandom.push(randomNumber);

    selectedMusics.push(musics[randomNumber]);
  }

  return selectedMusics;
}

export default selectMusics;
