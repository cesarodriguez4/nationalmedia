# National Media Website

Express 5 web application for National Media - Precision Audience Intelligence.

## Project Structure

```
NationalMedia.com/
├── package.json          # Dependencies and scripts
├── server.js             # Express 5 server with routes
├── views/
│   ├── partials/
│   │   ├── header.ejs    # Shared navigation
│   │   └── footer.ejs    # Shared footer
│   ├── home.ejs          # Home page (/)
│   ├── problem.ejs       # The Problem page (/problem)
│   └── technology.ejs    # Our Technology page (/technology)
├── public/
│   ├── css/
│   │   └── shared.css    # Shared CSS variables and styles
│   └── images/
│       └── logo.png      # Add your logo here
└── README.md
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home - Our Story |
| `/problem` | The Problem - Audience Divide Analysis |
| `/technology` | Our Solution - Six Systems Platform |

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The server will start at `http://localhost:3000` with hot reload using nodemon.

## Production

```bash
npm start
```

## Testing

The project includes a comprehensive test suite using Jest and Supertest.

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Coverage

| Category | Tests |
|----------|-------|
| Route responses | 12 |
| Content validation | 10 |
| Navigation consistency | 6 |
| 404 handling | 3 |
| Static files | 2 |
| Brand/deprecated content | 4 |

The tests verify:
- All routes return correct status codes (200/404)
- Pages render correct HTML content
- Navigation links are consistent across all pages
- CTAs link to the correct destinations
- Static CSS files are served correctly
- "Founded 1985" appears correctly (not 1983)
- Contact email `info@natmedia.com` is present
- No deprecated Privacy/Terms links exist

## Logo Setup

Place your official logo file in `public/images/` as `logo.png` or `logo.svg`. The header includes a fallback logo mark if the image is not found.

## Navigation

- **Our Story** → Home page (`/`)
- **The Problem** → Problem page (`/problem`)
- **Our Solution** → Technology page (`/technology`)
- **LET'S TALK** → Scrolls to contact section

## CTAs

- Home page: "SEE THE PROBLEM" → `/problem`
- Problem page: "EXPLORE OUR SYSTEM" → `/technology`
- Technology page: "Schedule a Demo" → Contact section

## Contact

All contact buttons link to: `info@natmedia.com`

---

Founded 1985 · Precision Intelligence

