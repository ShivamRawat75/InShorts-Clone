
import { data } from "./constants/data";

import News from './model/news-schema';

const DefaultData = async () => {
    try {
        await News.insertMany(data);
        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error);
    }
}

export default DefaultData;