import { Box, Typography, styled } from '@mui/material';

const Image = styled('img')({
    height: 34,
    '&:last-child':{
        margin:'0 50px 0 20px'
    }
})

const Text=styled(Typography)`
    font-size : 14px
    font-weight:300;
    margin-left :50px
`

const Container = styled(Box)`
    background : #f44336;
    color : #ffffff;
    display : flex;
    align-items :center;
    height: 48px;
    margin-bottom:30px;
`

const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return (
        <Container>
            <Text>
                For the best experience use inshorts app on your smart phone
            </Text>
            <Box style={{ display: "flex" ,marginLeft :"auto"}}>
                <Image src={appleStore} alt="appleStroe" />
                <Image src={googleStore} alt="googleStore" />
            </Box>
        </Container>
    );
};

export default InfoHeader;