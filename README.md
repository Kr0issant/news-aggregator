# News Aggregator Web App

A clean and simple web application for browsing and searching news articles from various sources.

## Features

* **Keyword Search:** Find news articles by searching for specific keywords.
* **Advanced Filtering:** Narrow down results by:
  * Category (e.g., Business, Technology, Sports)
  * Country
  * Date range (From/To)
* **Sorting:** Sort articles by relevancy or publication date.
* **Pagination:** Navigate through search results using simple arrow buttons.
* **Interactive UI:** Features sleek hover effects and a highly responsive user experience.

## API Key Management

To protect the news API key, it is not exposed on the frontend. Instead, a lightweight Express.js server is used to serve the key from a local `.env` file via a dedicated API endpoint. The client-side JavaScript fetches the key from this endpoint, ensuring it remains secure and is not committed to public repositories.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/news-aggregator.git](https://github.com/your-username/news-aggregator.git)
   ```
2. **Navigate to the server directory and install dependencies:**
   ```bash
   cd news-aggregator/server
   npm install
   ```
3. **Create a `.env` file in the `server` directory and add your API key:**
   ```
   API_KEY=your_news_api_key_here
   ```
4. **Start the server:**
   ```bash
   node server.js
   ```
5. **Open `index.html` in the src directory in your browser to use the app.**

## Hackathon Project

This project was built as part of the Open Source Club Hackathon.

## Attribution

* Arrow icons created by [Ten Bystry](https://www.flaticon.com/authors/tenbystry) from [Flaticon](https://www.flaticon.com/).
