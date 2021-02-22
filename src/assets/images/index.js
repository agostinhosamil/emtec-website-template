import path from 'path'

const createImageElement = imagePath => {
  const imageAbsPath = `./${ imagePath }`

  console.log (imageAbsPath)

  try {
    const image = require(imageAbsPath)

    return props => (
      <img { ...props } src={ image } />
    )
  } catch (err) {
    return () => <p>{ imagePath } image not found..!</p>
  }
}

export default createImageElement
