import { Url } from 'url';

export interface search {
    id:number,
    readable:boolean,
    title:string,
    title_short:string,
    title_version:string,
    link:Url,
    duration:number,
    rank:number,
    explicit_lyrics:boolean,
    explicit_lyrics_content:number,
    explicit_lyrics_cover:number,
    preview:Url,
    artist:{
        id:number,
        name:string,
        link:Url,
        picture:Url,
        picture_small:Url,
        picture_medium:Url,
        picture_big:Url,
        picture_xl:Url,
        tracklist:Url,
        type:string
    },
    album:{
        id:number,
        title:string,
        cover:Url,
        cover_small:Url,
        cover_medium:Url,
        cover_big:Url,
        cover_xl:Url,
        tracklist:Url,
        type:string
    },
    type:string

}