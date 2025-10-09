import axios from 'axios'

// wheenevr you await inside a funciton, you need to flag that function as asynchronous
const searchImages = async (term) => {
    /*
    'axios.' bc we are calling a built-in method from the imported library
    When using axios GET, the first argument is the url as a string
    The second argument is an options object. We usually store this in another file (.env)
    'headers is an optional parameter, but you need it if using an API key requires authentication
    */
    const response = await axios.get('https://api.unsplash.com/search/photos', { // If I didn't use await here, my console.log would not work as it would output before I got my response
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
        },
        params: {query: term}
    })
    // 'data' is part of the Axios response
    // 'results' is specific to the Unsplash API, and I know because I had to check their documentation to know this key exists
    return response.data.results
}

export default searchImages;