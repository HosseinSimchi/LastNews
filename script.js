function gettingNews(id){
    var list_News = [];
	async function getapi(url) {
		const response = await fetch(url);
		var data = await response.json();
        text = " ";
        for (var i = 0; i < data.articles.length; i++) {
            list_News.push(data.articles[i].title);
        }
        for (var i = 0; i < list_News.length; i++) {
            text += list_News[i] + "\n";
        }
        document.getElementById("ShowNews").innerHTML = text;
	}

    inputText = document.getElementById(id).textContent;
    switch (inputText) {
        case "Top business headlines in the US":
            var api_url =
            "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fe3977a74e4b4251ba8cff10bc301b5e"
            getapi(api_url)    
            break; 
        case "Top headlines from TechCrunch":
            var api_url =
            "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fe3977a74e4b4251ba8cff10bc301b5e"
            getapi(api_url)     
            break;
        case "All articles about Tesla":    
            var api_url =
            "https://newsapi.org/v2/everything?q=tesla&from=2022-05-22&sortBy=publishedAt&apiKey=fe3977a74e4b4251ba8cff10bc301b5e"
            getapi(api_url)     
            break;
        case "All articles mentioning Apple":
            var api_url =
            "https://newsapi.org/v2/everything?q=apple&from=2022-06-21&to=2022-06-21&sortBy=popularity&apiKey=fe3977a74e4b4251ba8cff10bc301b5e"
            getapi(api_url)     
            break;
        }
}






