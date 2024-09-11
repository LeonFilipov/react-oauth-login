import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Callback() {
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState(null);

    console.log(searchParams.get('code'));
    useEffect(() => {
        const requestToken = () => {
            axios.get('http://localhost:3000/auth/google_oauth2/callback', {
                params: {
                    code: searchParams.get('code'),
                    prompt: searchParams.get('prompt'),
                    authuser: searchParams.get('authuser'),
                    scope: searchParams.get('scope')
                }
            })
            .then(response => setToken(response.data.token))
            .catch(error => console.log(error));
        }
        
        if (searchParams.get('code')) {
            requestToken();
        }
        
    }, [searchParams]);

    const handleClick = () => {
        console.log(token);
        axios.get('http://localhost:3000/authorization', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    }
    
    return (
        <div>
            <button onClick={() => handleClick()}></button>
        </div>
    )
}

export default Callback