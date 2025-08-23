import { parser } from "./util.js";

var apiKey;

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", submit);

const searchBar = document.getElementById("search-bar");
const category = document.getElementById("category");
const location = document.getElementById("location");
const dateFrom = document.getElementById("date-from");
const dateTo = document.getElementById("date-to");
const resultsNum = document.getElementById("results-num");
const container = document.querySelector(".article-container");

// --- Article Structure ---
const article_template =`<article>
                <div class="info">
                    <a class="article-title" href="{URL}" target="_blank">{TITLE}</a>
                    <div class="article-description">{DESC}</div>
                    <span class="source-date">
                        <a class="article-source" href="{SOURCE_URL}" target="_blank">{SOURCE_NAME}</a>‎ ‎ ‎ ‎ ‎ ‎{DATE}
                    </span>
                </div>
                <img class="article-image" src="{IMG}">
            </article>
            `;

// --- Fetch API Key from Localhost 3000 ---
fetch("http://localhost:3000/api")
.then(response => {
    if (!response.ok) { throw new Error("Network response was not ok " + response.statusText); }

    return response.json();
})
.then(data => {
    apiKey = data.apiKey;
})
.catch(error => {
    console.error("Fetch error: ", error);
});

// --- Handle Submission ---
function submit() {
    event.preventDefault();

    container.innerHTML = "";

    let queries = {"apikey": apiKey, "max": resultsNum.value, "lang": "en"};
    let query;
    let element;

    if (category.value !== "All") { queries["category"] = category.value.toLowerCase(); }

    if (searchBar.value === ""){
        if (category.value === "All") { alert("Cannot have an empty search field."); return; }
    } else { queries["q"] = searchBar.value; }

    if (location.value !== "") { queries["country"] = parser(location.value); }
    if (dateFrom.value !== "") { queries["from"] = dateFrom.value; }
    if (dateTo.value !== "") { queries["to"] = dateTo.value; }

    query = `https://gnews.io/api/v4/${category.value === "All" ? "search" : "top-headlines"}?`;  // Use search or top-headlines endpoint based on category input field

    for (const key in queries) {
        query += `${key}=${encodeURIComponent(queries[key])}&`;
    }
    query = query.substring(0, query.length - 1);
    console.log(query);

    fetch(query)
    .then(response => {
        if (!response.ok) { throw new Error("Network response was not ok " + response.statusText); }
        return response.json();
    })
    .then(data => {
        data.articles.forEach(article => {
            element = article_template.replace("{TITLE}", article.title);
            element = element.replace("{URL}", article.url);
            element = element.replace("{DESC}", article.description);
            element = element.replace("{SOURCE_NAME}", article.source.name);
            element = element.replace("{SOURCE_URL}", article.source.url);
            element = element.replace("{DATE}", new Date(article.publishedAt).toLocaleDateString('en-GB'));
            element = element.replace("{IMG}", article.image);

            container.innerHTML += element;
        });
    })
    .catch(error => {
        console.error("Fetch error: ", error);
    });
}