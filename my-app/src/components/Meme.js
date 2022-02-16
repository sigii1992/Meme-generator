import {useState} from 'react'
import memesData from '../memesData.js'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  const getMemeImage= (e) => {
    e.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)];
    setMeme(prev => ({
      ...prev,
      randomImage: randomMeme.url
      }))
  };

  return (
    <main>
      <div className="form">
        <input type="text" name="top-text" placeholder="Top text here..." className="form-input" />
        <input type="text" name="bottom-text" placeholder="Bottom text here..." className="form-input" />
        <button onClick={getMemeImage} className="form-button">Get a new meme image</button>
      </div>
      <img src={meme.randomImage} className="meme-image"/>
    </main>
  )  
}

export default Meme;