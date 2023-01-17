
import { useEffect } from "react";
import { Box } from "@mui/system";
import { getNews } from "../service/api";

const Articles=()=>{

    useEffect(()=>{
        dailyNews();
    },[]);

    const dailyNews=async()=>{
        let response= await getNews();
    }

    return (
        <Box>
            Hello from articles

        </Box>

    )
}

export default Articles;