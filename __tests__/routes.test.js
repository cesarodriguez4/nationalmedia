const request = require('supertest');
const app = require('../server');

describe('National Media Routes', () => {
    
    describe('GET /', () => {
        it('should return status 200', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
        });

        it('should return HTML content type', async () => {
            const response = await request(app).get('/');
            expect(response.headers['content-type']).toMatch(/html/);
        });

        it('should render home page with correct title', async () => {
            const response = await request(app).get('/');
            expect(response.text).toContain('National Media - Precision Audience Intelligence');
        });

        it('should contain hero section content', async () => {
            const response = await request(app).get('/');
            expect(response.text).toContain('WE FIND WHO');
            expect(response.text).toContain('MATTERS');
        });

        it('should contain navigation links', async () => {
            const response = await request(app).get('/');
            expect(response.text).toContain('Our Story');
            expect(response.text).toContain('The Problem');
            expect(response.text).toContain('Our Solution');
        });

        it('should contain CTA link to /problem', async () => {
            const response = await request(app).get('/');
            expect(response.text).toContain('href="/problem"');
        });

        it('should contain stats section', async () => {
            const response = await request(app).get('/');
            expect(response.text).toContain('$3B+');
            expect(response.text).toContain('750+');
        });

        it('should contain awards section', async () => {
            const response = await request(app).get('/');
            expect(response.text).toContain('42 Awards');
            expect(response.text).toContain('Reed Awards');
            expect(response.text).toContain('Pollie Awards');
        });

        it('should contain footer with Founded 1985', async () => {
            const response = await request(app).get('/');
            expect(response.text).toContain('Founded 1985');
        });

        it('should contain contact email', async () => {
            const response = await request(app).get('/');
            expect(response.text).toContain('info@natmedia.com');
        });
    });

    describe('GET /problem', () => {
        it('should return status 200', async () => {
            const response = await request(app).get('/problem');
            expect(response.status).toBe(200);
        });

        it('should render problem page with correct title', async () => {
            const response = await request(app).get('/problem');
            expect(response.text).toContain('The Problem - National Media');
        });

        it('should contain problem page hero content', async () => {
            const response = await request(app).get('/problem');
            expect(response.text).toContain('The country is divided');
        });

        it('should contain 94% and 6% statistics', async () => {
            const response = await request(app).get('/problem');
            expect(response.text).toContain('94%');
            expect(response.text).toContain('6%');
        });

        it('should contain Pennsylvania case study', async () => {
            const response = await request(app).get('/problem');
            expect(response.text).toContain('PENNSYLVANIA');
            expect(response.text).toContain('261,847');
        });

        it('should have active navigation state for problem page', async () => {
            const response = await request(app).get('/problem');
            // Check that currentPage is set correctly in the nav
            expect(response.text).toMatch(/class="[^"]*active[^"]*"[^>]*>The Problem/i);
        });

        it('should contain CTA link to /technology', async () => {
            const response = await request(app).get('/problem');
            expect(response.text).toContain('href="/technology"');
            expect(response.text).toContain('EXPLORE OUR SYSTEM');
        });

        it('should contain footer with Founded 1985', async () => {
            const response = await request(app).get('/problem');
            expect(response.text).toContain('Founded 1985');
        });
    });

    describe('GET /technology', () => {
        it('should return status 200', async () => {
            const response = await request(app).get('/technology');
            expect(response.status).toBe(200);
        });

        it('should render technology page with correct title', async () => {
            const response = await request(app).get('/technology');
            expect(response.text).toContain('Our Technology');
        });

        it('should contain Six Systems headline', async () => {
            const response = await request(app).get('/technology');
            expect(response.text).toContain('Six Systems');
        });

        it('should contain all six system names', async () => {
            const response = await request(app).get('/technology');
            expect(response.text).toContain('Audience Platform');
            expect(response.text).toContain('PowerPanel');
            expect(response.text).toContain('Tripwire');
            expect(response.text).toContain('Baker');
            expect(response.text).toContain('FCC Intelligence');
            expect(response.text).toContain('KPI');
        });

        it('should contain technology stats', async () => {
            const response = await request(app).get('/technology');
            expect(response.text).toContain('220M+');
            expect(response.text).toContain('1,300+');
        });

        it('should contain Schedule a Demo CTA', async () => {
            const response = await request(app).get('/technology');
            expect(response.text).toContain('Schedule a Demo');
        });

        it('should contain contact email', async () => {
            const response = await request(app).get('/technology');
            expect(response.text).toContain('info@natmedia.com');
        });

        it('should contain footer with Founded 1985', async () => {
            const response = await request(app).get('/technology');
            expect(response.text).toContain('Founded 1985');
        });
    });

    describe('404 Handler', () => {
        it('should return status 404 for non-existent routes', async () => {
            const response = await request(app).get('/non-existent-page');
            expect(response.status).toBe(404);
        });

        it('should return HTML for 404', async () => {
            const response = await request(app).get('/this-page-does-not-exist');
            expect(response.headers['content-type']).toMatch(/html/);
        });

        it('should handle multiple invalid routes', async () => {
            const routes = ['/invalid', '/foo/bar', '/test123', '/about'];
            
            for (const route of routes) {
                const response = await request(app).get(route);
                expect(response.status).toBe(404);
            }
        });
    });

    describe('Static Files', () => {
        it('should serve shared.css', async () => {
            const response = await request(app).get('/css/shared.css');
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/css/);
        });

        it('should contain CSS variables in shared.css', async () => {
            const response = await request(app).get('/css/shared.css');
            expect(response.text).toContain('--navy-primary');
            expect(response.text).toContain('--cyan-primary');
        });
    });

    describe('Navigation Consistency', () => {
        it('all pages should have the same navigation structure', async () => {
            const pages = ['/', '/problem', '/technology'];
            
            for (const page of pages) {
                const response = await request(app).get(page);
                expect(response.text).toContain('NATIONAL MEDIA');
                expect(response.text).toContain('href="/"');
                expect(response.text).toContain('href="/problem"');
                expect(response.text).toContain('href="/technology"');
                expect(response.text).toContain("LET'S TALK");
            }
        });

        it('all pages should have contact section', async () => {
            const pages = ['/', '/problem', '/technology'];
            
            for (const page of pages) {
                const response = await request(app).get(page);
                expect(response.text).toContain('info@natmedia.com');
            }
        });
    });
});

describe('Content Validation', () => {
    
    describe('No deprecated content', () => {
        it('should not contain Founded 1983 (should be 1985)', async () => {
            const pages = ['/', '/problem', '/technology'];
            
            for (const page of pages) {
                const response = await request(app).get(page);
                expect(response.text).not.toContain('Founded 1983');
            }
        });

        it('should not contain Privacy/Terms links', async () => {
            const pages = ['/', '/problem', '/technology'];
            
            for (const page of pages) {
                const response = await request(app).get(page);
                // Check that old footer links are removed
                expect(response.text).not.toMatch(/<a[^>]*>Privacy<\/a>/);
                expect(response.text).not.toMatch(/<a[^>]*>Terms<\/a>/);
            }
        });
    });

    describe('Brand consistency', () => {
        it('all pages should reference National Media brand', async () => {
            const pages = ['/', '/problem', '/technology'];
            
            for (const page of pages) {
                const response = await request(app).get(page);
                expect(response.text).toContain('National Media');
            }
        });

        it('all pages should have contact email in footer', async () => {
            const pages = ['/', '/problem', '/technology'];
            
            for (const page of pages) {
                const response = await request(app).get(page);
                expect(response.text).toContain('info@natmedia.com');
            }
        });

        it('all pages should NOT have Precision Intelligence text', async () => {
            const pages = ['/', '/problem', '/technology'];
            
            for (const page of pages) {
                const response = await request(app).get(page);
                // Check footer area doesn't contain "Precision Intelligence" tagline
                expect(response.text).not.toMatch(/Founded 1985.*Precision Intelligence/);
            }
        });
    });
});


