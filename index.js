const getQuote = async () => {

    try {
        const quoteContent = document.getElementById('quoteContent');
        const authorName = document.getElementById('authorName');

        const response  = await fetch('https://api.quotable.io/random');
        
        if(!response.ok) {
            throw new Error("Cannot fetch the data from the API");
        }
        
        const data = await response.json();
        
        // console.log(data);

        quoteContent.innerHTML = data.content;
        authorName.innerHTML = "-" + data.author;

        // console.log(data.content);
        // console.log(data.author);

    } catch(error) {
        console.log(error);
    }
}