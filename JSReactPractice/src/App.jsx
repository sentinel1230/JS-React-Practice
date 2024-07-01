import { useState } from 'react'
import './App.css'

const PhotoList = ({ photos }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </ul>
  )
}

const PhotoItem = ({ photo }) => {
  return (
    <li>
      <h3>{photo.title}</h3>
      <img src={photo.thumbnailUrl} alt={photo.url} />
      <p>Album ID: {photo.albumId}</p>
      <p>Photo ID: {photo.id}</p>
    </li>
  )
}

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const buttonColor = counter >= 10 ? 'buttonStyle red' : 'buttonStyle'

  return (
    <>
      <button
        className={buttonColor}
        onClick={() => setCounter((counter) => counter + 1)}
      >
        {counter}
      </button>
    </>
  )
}

const Form = () => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Вы ввели: ", input)
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder='Введите текст' />

      <button type='submit'>Отправить</button>
    </form>
  )
}

const App = () => {
  const photos = [
    {
      "albumId": 1,
      "id": 1,
      "title": "green",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "purple",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
  ]

  return (
    <>
      <h1>Photos list</h1>
      <PhotoList photos={photos} />
      <Counter />
      <Form />
    </>
  )
}

export default App
