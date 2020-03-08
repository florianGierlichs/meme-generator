async function getMemes() {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const results = await response.json();
  // memes is an object in data, is an object in API callback
  const memes = results.data.memes;
  const memesImages = memes.map(meme => {
    return meme.url;
  });
  return memesImages;
}

export async function getRandomMeme() {
  const memes = await getMemes();
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];
  return randomMeme;
}
