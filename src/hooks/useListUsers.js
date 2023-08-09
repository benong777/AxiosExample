import { useState } from 'react';
import jsonplaceholder from '../api/sampleApi';

export default () => {
    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null
    });

    // const listUsers = async (term) => {
    const listUsers = async () => {
        //-- Set 'Loading' state
        setResults({
            data: null,
            loading: true,
            error: null
        });

        try {
            const res = await jsonplaceholder.get('/users'
              // ,
              // {
              //    params: {                 // adds the following params: '/users?limit=15&location=toronto'
              //        limit: 15,
              //        term,                 // same as 'term: term'
              //        location: "Toronto",
              //    }
              // }
            );

            //-- Update data and 'loading' state
            setResults({
                data: res.data,
                loading: false,
                error: null
            });
            console.log(res.data);
        } catch(error) {
            //-- Update data and 'loading' state
            setResults({
                data: null,
                loading: false,
                error: "API fetch error!!!"
            });
        }
    };

    return [results, listUsers];
};