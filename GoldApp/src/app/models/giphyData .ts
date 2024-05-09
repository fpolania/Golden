import { Gif } from '../models/gifs';
export class GiphyData {
    data: Array<Gif>;
    meta: {
        status: number;
        msg: string;
        response_id: string;
    };
    pagination: {
        total_count: number;
        count: number;
        offset: number;
    };
}