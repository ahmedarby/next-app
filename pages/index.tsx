import { useState } from "react";
import type { NextPage, NextPageContext } from "next";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import useMediaQuery from '@mui/material/useMediaQuery';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Container } from "../styled";


const Home: NextPage = () => {
    const [value, setValue] = useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    

    return (
        <Container>
            <BottomNavigation sx={{ width: "100wv" }} value={value} onChange={handleChange} style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "#ededed" }}>
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
        </Container>
    );
};


const getServerSideProps = async (context: NextPageContext) => {
    return {
        props: {}
    }
};


export default Home;
export {
    getServerSideProps
}
