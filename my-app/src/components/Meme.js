import {useState, useEffect} from 'react'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setAllMemes(data.data.memes))
  },[])

  const getMemeImage= () => {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
    setMeme(prev => {
      return {
      topText: "",
      bottomText: "",
      randomImage: randomMeme.url
      }
    })
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setMeme(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          name="topText" 
          placeholder="Top text here..." 
          className="form-input" 
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="bottomText" 
          placeholder="Bottom text here..." 
          className="form-input" 
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          onClick={getMemeImage} 
          className="form-button">
            Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image"/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )  
}

export default Meme;