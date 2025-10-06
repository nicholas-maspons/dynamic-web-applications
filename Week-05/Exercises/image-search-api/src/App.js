import {useState} from 'react'
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList"
import searchImages from './api'

function App() {
  const [images, setImages] = useState([])

  const handleFormSubmit = async (term) => {

    // console.log(term)

    const result = await searchImages(term) // 'await' here because I use it in api.js
    // console.log(result)
    setImages(result)
  }

  return (
    <div>
      <h3>Type a term then click enter to submit</h3>
      <SearchBar onSubmit={handleFormSubmit}/>
      <ImageList images={images} />
    </div>
  );
}

export default App;
