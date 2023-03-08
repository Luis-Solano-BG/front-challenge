import axios from "axios"

export const getImageService = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        return response
    } catch (error) {
        throw error
    }
}