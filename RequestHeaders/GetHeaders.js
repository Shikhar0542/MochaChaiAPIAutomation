import axios from "axios";

async function GetRequestByEndpoint(endpoint)
{
    try
    {
        const res = await axios.get(endpoint);
        return res;    
    }
    catch(error)
    {
        return error.response;
    }
}

export{
    GetRequestByEndpoint
}