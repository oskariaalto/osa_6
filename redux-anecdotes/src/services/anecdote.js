import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (content) => {
    const anecObj = {content, votes: 0}
    const response = await axios.post(baseUrl, anecObj)
    return response.data
}

const updateLike = async (id,content) => {
    const response = await axios.put(`${baseUrl}/${id}`,content)
    return response.data
}

export {
    getAll,
    create,
    updateLike
}