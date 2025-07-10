import React from "react";


export default function Map(mood){

    const mapToGenre = {
        anger: [80, 99, 35], //crime, doc, comedy
        disgust: [10752, 9648], //war, mystery
        fear: [53, 27, 18, 35], //thriller, horror, drama, comedy
        joy: [28,16, 35, 10751, 10749, 14], //action, Animation, comedy, family, romance, fantasy
        neutral: [36, 10402, 878, 37], //history, music, sf, western
        sadness: [53, 27, 80, 12], //thriller, horror, crime, adventure
        surprise: [10752, 36], //war, history

    }

    const id = mapToGenre[mood?.toLowerCase()] || [];

    return id; 


}