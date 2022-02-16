import {useState} from 'react'
import memesData from '../memesData.js'

const Meme = () => {
  const [memeImage, setMemeImage] = useState('');

  const getMemeImage= (e) => {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)];
    setMemeImage(prev => randomMeme.url)
  };

  return (
    <main>
      <div className="form">
        <input type="text" name="top-text" placeholder="Top text here..." className="form-input" />
        <input type="text" name="bottom-text" placeholder="Bottom text here..." className="form-input" />
        <button onClick={getMemeImage} className="form-button">Get a new meme image</button>
      </div>
      <img src={memeImage} className='meme-image'/>
    </main>
  )  
}

export default Meme;