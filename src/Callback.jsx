import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const IP = 'http://52.14.63.57'
// const IP = 'http://localhost'

function Callback() {
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState(null);

    console.log(searchParams.get('code'));
    useEffect(() => {
        const requestToken = () => {
            axios.get(`${IP}:3000/auth/google_oauth2/callback`, {
                params: {
                    code: searchParams.get('code')
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
        axios.get(`${IP}:3000/profile`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    }
    
    return (
        <div>
            <button onClick={() => handleClick()}>Check authorization</button>
        </div>
    )
}

export default Callback