import React, {useState, useEffect} from "react"
import Form from "./components/Form"
import ImageListing from "./components/ImageListing"


const App = () => {

  // App State
  const [search, setSearch] = useState("")
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {

    const callApi = async () => {
      if(search === "") return

      const imagesPerPage = 30
      const key = "9992732-3cd6d66914afb63c3c83d1922"
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${page}`

      const response = await fetch(url)
      const result = await response.json()

      setImages(result.hits)

      // Calculate the total amount of pages
      const calculatePagesTotal = Math.ceil(result.totalHits / imagesPerPage)
      setTotalPages(calculatePagesTotal)

      // Move Screen Up
      const jumbotron = document.querySelector(".jumbotron")
      jumbotron.scrollIntoView({behavior: "smooth"})
    }
    callApi()
  }, [search, page])

  // Define Previous Page
  const handlePreviousPage = () => {
    const newCurrentPage = page - 1

    if(newCurrentPage === 0) return

    setPage(newCurrentPage)
  }

  // Define Next Page
  const handleNextPage = () => {
    const newCurrentPage = page + 1

    if(newCurrentPage > totalPages) return

    setPage(newCurrentPage)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image Browser</p>

        <Form 
          setSearch={setSearch}
          setPage={setPage}
        />
      </div>

      <div className="row justify-content-center">
        <ImageListing 
          images={images}
        />

        {(page === 1) ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={handlePreviousPage}
          >&laquo; Previous</button>
        )}

        {(page === totalPages) ? null : (
          <button
            type="button"
            className="bbtn btn-info"
            onClick={handleNextPage}
          >Next &raquo;</button>
        )}
      </div>
    </div>
  )
}

export default App
