//projects imports
import donationBox from "../assets/donationbox.png";
import myBlog from "../assets/myblog.png";
import mausam from "../assets/mausam.png";
import portfolio from "../assets/portfolio.png";
import todo from "../assets/todo.png";
import nav from "../assets/nav.jpg";
import chess from "../assets/chess.png";


// skills imports
import python from "../assets/PYTHON.png";
import django from "../assets/DJANGO.png";
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import js from "../assets/JS.png";
import tailwind from "../assets/TAILWIND.png";
import vite from "../assets/VITE.png";
import linux from "../assets/LINUX.png";
import ccpp from "../assets/C.png";
import sql from "../assets/SQL.png";
import github from "../assets/GITHUB.png";
import figma from "../assets/FIGMA.png";
import postman from "../assets/postman.png";
import putty from "../assets/putty.png";
import cpanel from "../assets/cpanel.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.jpg";
import express from "../assets/express.png";
import urlshort from "../assets/urlshort.png";

// project data
export const projects = [
    {
        "key": 1,
        "name": "BlogMine - A Blog Application",
        "desc": `• Engineered a comment feature to boost user engagement and integrated email automation for instant notification upon commenting\n
        • Integrated an email automation system to automatically send notifications to users upon commenting\n
        • Designed a ”Save for Later” functionality utilizing session management for tracking and managing saved posts`,
        "img": myBlog,
        "github": "https://github.com/Aviii24x7/Blog-Website",
        "demo": "javascript:void(0);",
        "techStack": "Django, Python, HTML, CSS"
    },
    {
        "key": 2,
        "name": "My Portfolio",
        "desc": `• Implemented responsive design and JavaScript objects for optimal front-end display\n
        • Integrated getform.io for email capture and developed an automatic PDF resume downloader\n`,
        "img": portfolio,
        "github": "https://github.com/Aviii24x7/avinash-chauhan",
        "demo": "https://aviii24x7.github.io/avinash-chauhan/",
        "techStack": "Vite+ React.js, Tailwind"
    },
    {
        "key": 3,
        "name": "Chess.com Clone",
        "desc": `• Developed a real-time multiplayer chess game using Express, Socket.io, and Chess.js. Implemented dynamic role assignment (White/Black) with spectator mode and FEN-based game state management\n
        • Ensured smooth gameplay synchronization, handling player moves, turns, sound effects, undo, reset and disconnections efficiently.\n`,
        "img": chess,
        "github": "https://github.com/Aviii24x7/Chess.com-Clone",
        "demo": "https://chessavi-lawtpadx.b4a.run/",
        "techStack": "Node.js, Express.js, Socket.io"
    },
    {
        "key": 7,
        "name": "Advanced URL Shrinker",
        "desc": `• Customizable Short URLs: Create personalized short links with optional custom IDs.\n
        • Secure Access: Utilize JWT authentication for secure user login and API access.\n
        • Real-time Analytics: Track URL performance with visualizations like graphs and charts.\n
        • Admin Features: Manage and delete URLs with admin-only controls, backed by Redis caching for efficiency.`,
        "img": urlshort,
        "github": "https://github.com/Aviii24x7/Advanced-URL-Shrinker",
        "demo": "javascript:void(0);",
        "techStack": "Node.js, Express.js, MongoDB, EJS, Redis, JWT"
    },
    {
        "key": 3,
        "name": "Payment Gateway API Integrations",
        "desc": `• Developed three robust payment gateway integrations leveraging Razorpay, Stripe, and Paypal\n
        • Ensured comprehensive payment method support, encompassing UPI, Credit Cards, Debit Cards, Bank Transfers, and more.\n
        • Implemented a seamless transaction experience, providing users with versatile and secure payment options Internationally`,
        "img": donationBox,
        "github": "https://github.com/Aviii24x7/Payment-Gateways-API-Integrations",
        "demo": "javascript:void(0);",
        "techStack": "Python, Django, Razorpay, Stripe, Paypal SDK"
    },
    {
        "key": 4,
        "name": "Weather API Integration",
        "desc": `• Retrieve data from the OpenWeather API by making distinct API calls for the Current Weather and 7-Day Forecast\n
        • Implement a structured approach, ensuring clarity in handling current weather information and extended forecasts independently\n`,
        "img": mausam,
        "github": "https://github.com/Aviii24x7/Mausam-App",
        "demo": "javascript:void(0);",
        "techStack": "Python, Django, OpenWeatherAPI SDK"
    },
    {
        "key": 5,
        "name": "Navigate U",
        "desc": `• Addressed a real-life challenge by facilitating the orientation of new students in navigating campus paths\n
        • Incorporated additional features like a search engine contributing to a more user-friendly experience\n
        • Dynamically fetched data from the database to present accurate and relevant results\n
        • Implemented Querysets across all database models, optimizing the search functionality efficiently`,
        "img": nav,
        "github": "https://github.com/PrinceLal-LE/NavigateU",
        "demo": "javascript:void(0);",
        "techStack": "Django, Python, HTML, CSS"
    },
    {
        "key": 6,
        "name": "To Do APP",
        "desc": `• Designed and implemented a Django-based to-do app with full CRUD functionality, allowing seamless Create, Read, Update, and Delete operations for tasks\n
        • Implemented robust authentication and authorization features for secure and personalized task management\n
        • Developed database models using Django ORM\n`,
        "img": todo,
        "github": "https://github.com/Aviii24x7/To-Do-App",
        "demo": "javascript:void(0);",
        "techStack": "Django, Python, HTML, CSS"
    }
]






// skill data
export const skills = [
    {   
    'key': 1,
    'name' : "Python",
    'img' : python
    },

        {   
            
        'key': 2,
        'name' : "Django",
        'img' : django
    },
    {
        'key': 3,
        'name' : "HTML",
        'img' : html
    },
    {
        'key': 4,
        'name' : "CSS",
        'img' : css
    },
    {
        'key': 5,
        'name' : "JavaScript",
        'img' : js
    },
    {
        'key': 6,
        'name' : "Vite + React",
        'img' : vite
    },
    {
        'key': 7,
        'name' : "Tailwind",
        'img' : tailwind
    },
    {
        'key': 8,
        'name' : "C / C++",
        'img' : ccpp
    },
    {
        'key': 9,
        'name' : "GitHub",
        'img' : github
    },
    {
        'key': 10,
        'name' : "Linux",
        'img' : linux
    },
    {
        'key': 11,
        'name' : "MySQL",
        'img' : sql
    },
    {
        'key': 12,
        'name' : "Figma",
        'img' : figma
    },
    {
        'key': 13,
        'name' : "Postman",
        'img' : postman
    },
    {
        'key': 14,
        'name' : "puTTY",
        'img' : putty
    },
    {
        'key': 15,
        'name' : "cPanel",
        'img' : cpanel
    },
    {
        'key': 16,
        'name' : "Node JS",
        'img' : node
    },
    {
        'key': 17,
        'name' : "Express JS",
        'img' : express
    },
    {
        'key': 18,
        'name' : "Mongo DB",
        'img' : mongo
    },


    
    
]