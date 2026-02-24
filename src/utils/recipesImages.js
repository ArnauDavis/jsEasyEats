
const imageModules = import.meta.glob('/src/assets/bakedImages/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true })


const recipeImages = Object.keys(imageModules).reduce((acc, path) => {
  const parts = path.split('/')
  // If path is "/src/bakedImages/brownies/0.jpg"
  // parts will be ["", "src", "bakedImages", "brownies", "0.jpg"]
  const recipeKey = parts[parts.length - 2]
  
  if (!acc[recipeKey]) {
    acc[recipeKey] = []
  }

  acc[recipeKey].push(imageModules[path].default)
  acc[recipeKey].sort()

  return acc
}, {})

export default recipeImages