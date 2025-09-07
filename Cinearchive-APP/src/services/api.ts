'use client'
import { Show } from '@/types/move';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://streaming-availability.p.rapidapi.com/',
    headers: {
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
        'x-rapidapi-key' : '57f8e1bf28mshfbf66518d8fa053p13b441jsn53e1c4ec4ca4'
    }
})

export  async function resquestMovies(): Promise<Show[]> {
    const response = await api.get( '/shows/search/filters?series_granularity=show&order_direction=asc&order_by=original_title&genres_relation=and&output_language=en&show_type=movie&country=us' )
    return response.data.shows;
}