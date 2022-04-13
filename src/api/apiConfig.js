const apiConfig = {
    baseUrl: 'http://api.themoviedb.org/3/',
    apiKey: '712777741e65b897e9fc3167749386fd',
    orginalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;