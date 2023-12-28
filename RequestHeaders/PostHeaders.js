import axios from "axios";

async function PostRequestWithBody(endpoint, body)
{
    try
    {
        const res = await axios.post(endpoint, body);
        return res;    
    }
    catch(error)
    {
        return error.response;
    }
}

export{
    PostRequestWithBody
}