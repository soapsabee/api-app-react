import React, { useEffect } from 'react'
// import Monitor from '../components/monitor/Monitor'
import { useSelector, useDispatch } from 'react-redux';
import { usersFetch } from '../actions'
const Home = () => {

    const dispatch = useDispatch();

    const users = useSelector(state => state.users);

    console.log("users: "+ users);
    

    const listUser = users.map((user) => {
        
           return  <li key={user.id}>{user.id}</li>
        
    })

         
    
       





    useEffect(() => {
        dispatch(usersFetch())
    }, [users])

    return (

        <div>
            <ul>
              {listUser}
            </ul>
        </div>

    )


}

export default Home