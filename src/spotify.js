/* eslint-disable no-unreachable */

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";

const clientID =  "e98329b01f5b424ba03546210e57a172";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenfromURL = () => {
    //#access_token=BQCGSyVVBtyrh78CH9e6EZejImOs21NLlWIiiTM-iOriyHABRa13Jn60YHaEIZBR-iUCzjT1FCwoRw1QFNsuVyhCiH-vJ0Mwokmdbx6eatiR2akbZKLJHOqUmFiT6fF1GsJjYPSr4GsxPRSn-JbrfPRvR0aj2HIi5kn6&token_type=Bearer&expires_in=3600
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {})
}



export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20")
    }&response_type=token&show_dialog=true`; 
    