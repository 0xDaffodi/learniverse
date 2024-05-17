// MENTION: use axios to complete api request.
import axios from "axios";
import { ApiPrefix } from "./apiPrefix"; 

// 内容目录
// let menu = [];

export class ApiService {
    // 请求Stage Level目录
    async getMenu() {
        try {
            const { data } = await axios('http://160.238.36.143:3000/v1/content/menu');
            console.log(data);
            
        } catch (error) {
            console.error(error);
        }
    }
}