# youtubeclone
 📄 Project Title: YouTube Video Song Search Website
📌 Introduction:
This project is a dynamic web application that allows users to search and stream YouTube videos directly from a simple and elegant interface. The website integrates with the **YouTube Data API v3** to fetch videos based on the user's search query. It provides a responsive and interactive experience for browsing music or video content from YouTube.
Users simply enter a keyword (e.g., “new hindi song”, “Arijit Singh 2025”), and the platform fetches relevant video results using API calls and displays them with embedded players.
🛠️ Technologies & Tools Used:

| Tool/Technology          | Description                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **HTML5**                | Used to create the basic structure of the web pages.                                                              |
| **CSS3**                 | Used for styling the interface with custom colors, layout, spacing, and responsiveness.                           |
| **JavaScript (JS)**      | Enables client-side interaction, sends API requests to the backend and handles the dynamic loading of results.    |
| **PHP**                  | Acts as the backend server-side language, makes secure API calls to YouTube Data API using `file_get_contents()`. |
| **YouTube Data API v3**  | Official Google API that enables searching and accessing YouTube video data.                                      |
| **XAMPP** or **WAMP**    | Local web server environment to run and test the PHP files.                                                       |
| **Google Cloud Console** | Used to generate and manage the YouTube API key.                                                                  |

⚙️ Functionality:
🔍 Main Features:
* Search for any video/song using a keyword.
* Fetch 10 relevant YouTube video results via API.
* Display each video with title and playable YouTube iframe.
* Responsive layout using CSS grid.
* Error handling for invalid or empty queries.


📁 Project Structure:
/youtubeclone
│
├── index.php         # Main interface (HTML + PHP)
├── script.js         # JavaScript to trigger search and show results
├── style.css         # Styling for the search form and results layout
├── search.php        # PHP API handler that fetches YouTube data


🔐 API Integration:
* The project uses **YouTube Data API v3**.
* A valid API key is required to send requests and retrieve results.
* The API is accessed securely from the backend (`search.php`) to avoid exposing the key in frontend JS.
Sample API endpoint used:
https://www.googleapis.com/youtube/v3/search?part=snippet&q=your_query&type=video&key=YOUR_API_KEY

💡 How It Works (Flow):
1. User enters a search query (e.g., "romantic song").
2. JavaScript sends that query to `search.php` using `fetch()`.
3. `search.php` makes an API request to YouTube.
4. YouTube API responds with video data.
5. JavaScript reads the response and dynamically adds videos with embedded players to the page.


📈 Future Scope:
* Add voice search using Web Speech API.
* Add pagination (next page of results).
* Display video stats (views, likes).
* Save search history or favorites using a database.
* Add user login system.

✍️ Developer Info:

This project is designed and developed by Anshuman Singh as part of a web development learning initiative or academic project.

