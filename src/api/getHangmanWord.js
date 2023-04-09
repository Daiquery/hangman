const getHangmanWord = async () => {
        const response = await fetch('https://www.dictionaryapi.com/api/v3/references/arandomdoesntexist/json?key=c8fc58b9-ebb6-4d25-89e3-fddf81975c9e');
        const data = await response.json();
        return(data[0]);
}