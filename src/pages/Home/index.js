import React from 'react';
import Main from './../../components/organisms/Main';
import { useCookies } from "react-cookie";
const Home = (props) => {
    const [cookies] = useCookies([""]);
    return (
        <Main>
            <h1>Day la home {cookies.name_user}</h1>
        </Main>
    )
}

export default Home;