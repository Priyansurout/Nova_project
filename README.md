# Nova Music (Beta Version)
Nova Music is an ongoing project designed to create a music streaming website. This beta version is a work in progress, with active development currently underway. The website utilizes the Spotify API to provide music in a user-friendly card format.

## Features
+ **Music Cards**: Browse an extensive selection of music by clicking the search button, presented in an intuitive card format.
+ **Spotify** Integration: Access a vast library of songs, albums, and playlists through the Spotify API.
+ **Basic Authentication** : Users can sign up and log in to their accounts, allowing them to personalize their music experience.
+ **Live Feature (Upcoming)** : An exciting new feature that will enable two users to synchronize their music playback in real-time using WebSockets.

# How to Setup
To set up the project on your system, follow these steps:

1. **Prerequisites:**
   + Ensure you have MongoDB and Node.js installed on your system.
     
2. **Clone the Repository:**
   `git clone https://github.com/Priyansurout/full_stack_web.git`
    `cd full_stack_web`
   
4. **Install Dependencies:**
   `npm install`
   
5. **Set up Environment Variables:**
   + Create a .env file in the root directory of the project.
   + Add your Spotify API credentials:
     `SPOTIFY_CLIENT_ID=your_client_id`
     `SPOTIFY_CLIENT_SECRET=your_client_secret`
     
6. **Start the Client:**
  + Navigate to the client directory and run:
    `npm start`
    
6. **Return to the Root Directory:**
    `cd ..`
    
7. **Start the Server:**
    + Navigate to the server directory and run:
      `node index.js`
    (or with nodemon installed):
      `nodemon index.js`
      
8. **Congratulations!:**
    + The project is now up and running. If you encounter any issues, please feel free to contact us at priyansurout192004@example.com.


# Contributing
We welcome contributions from the community! If you'd like to get involved, please follow our contribution guidelines.

# Acknowledgements
+ Special thanks to the Spotify API for providing access to an extensive music library.
+ We appreciate the support of our contributors and the open-source community.
