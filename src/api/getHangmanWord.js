export const getHangmanWord = async () => {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const data = await response.json();
        return(data);
}