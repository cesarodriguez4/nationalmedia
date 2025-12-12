const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home', { 
        title: 'National Media - Precision Audience Intelligence',
        currentPage: 'home'
    });
});

app.get('/problem', (req, res) => {
    res.render('problem', { 
        title: 'The Problem - National Media',
        currentPage: 'problem'
    });
});

app.get('/technology', (req, res) => {
    res.render('technology', { 
        title: 'Our Technology - Six Systems, One Advantage | National Media',
        currentPage: 'technology'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('home', { 
        title: 'Page Not Found - National Media',
        currentPage: 'home'
    });
});

// Start server only if this file is run directly (not imported for testing)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`National Media server running at http://localhost:${PORT}`);
    });
}

// Export app for testing
module.exports = app;

