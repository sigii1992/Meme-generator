const Meme = () => {
  return (
    <main>
      <form className="form">
        <input type="text" name="top-text" placeholder="Top text here..." className="form-input" />
        <input type="text" name="bottom-text" placeholder="Bottom text here..." className="form-input" />
        <button type="submit" className="form-button">Get a new meme image</button>
      </form>
    </main>
  )  
}

export default Meme;