import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c7f0a39f85e40466a2b0175a720ec04c18f50b4832ca5b515162cb2b4935dfdd' 
    }
});
