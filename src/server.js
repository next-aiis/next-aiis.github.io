import { strapi } from "@strapi/client";

const host = 'http://localhost:1337';

export function getImageUrl(uri) {
    return `${host}${uri}`;
}

export function getDateStr(date) {
    const [year, month, day] = date.split('-');
    return {  year, month, day }
}

export class ServerApi {
    client;
    constructor() {
        this.client = strapi({ 
            baseURL: `${host}/api`,
            auth: '98e8578922870810f9f852f7be1d4ebb00c9a09aa367c17082c54de7c64ace8a326ac0952f07b51a91e6b10d35d2b01dd4c5ab17cbbc2b60b9a196a4b1ccbb89cfdf472720abdf6d5a94c18f5ca5896dd7a1029cc326dee4c6ce1d853fe3156d86e84e34932af9defaee218dcb3f6f947c899d6183280bc9ac290ecc0b63b194',            
        });
    }
    // 课程介绍
    getIntroduction()  {
        const introduction = this.client.single('introduction');
        return introduction.find();
    }
    // 课程安排
    getProgram()  {
        const program = this.client.single('program');
        return program.find();
    }
    // 授课教师
    listSpeaker() {
        const speaker = this.client.collection('speakers');
        return speaker.find({
            populate: 'avatar'
        });
    }
    // 课程注册
    getRegistration() {
        const registration = this.client.single('registration');
        return registration.find();
    }
    // 交通信息
    getTraffic() {
        const traffic = this.client.single('traffic');
        return traffic.find();
    }
    // 酒店信息
    getHotel() {
        const hotel = this.client.single('hotel');
        return hotel.find();
    }
}

export const serverApi = new ServerApi();