:root {
    --tickle-pink: #F283AF;
    --champagne: #FBF4EB;
    --blush: #FBD9E5;
    --raspberry: #C43670;
    --sunset: #F3CC97;
    --text-dark: #333;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: var(--champagne); color: var(--text-dark); overflow-x: hidden; }

/* Navegación */
.page-view { display: none; }
.active-view { display: block; }
header { background: white; padding: 1.5rem 5%; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
.logo { font-family: 'Playfair Display'; font-size: 1.8rem; color: var(--raspberry); cursor: pointer; text-decoration: none; font-weight: 700; }
nav a { margin-left: 2rem; text-decoration: none; color: var(--text-dark); font-weight: 600; cursor: pointer; }

/* Hero */
.hero { padding: 5rem 5%; display: flex; align-items: center; background: linear-gradient(135deg, var(--champagne), var(--blush)); min-height: 80vh; }
.hero-content { flex: 1; padding-right: 3rem; }
.hero h1 { font-family: 'Playfair Display'; font-size: 3.5rem; color: var(--raspberry); line-height: 1.1; }
.hero-image img { width: 100%; max-width: 500px; border-radius: 20px; box-shadow: 20px 20px 0 var(--sunset); }

/* Grid Multimedia */
.media-flex { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; padding: 4rem 5%; gap: 30px; }
.media-item { flex: 1; min-width: 320px; max-width: 450px; text-align: center; }
.video-web { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); background: #000; }
.floating-img { width: 120px; border-radius: 10px; transform: rotate(8deg); margin-top: -40px; position: relative; left: 40%; box-shadow: 5px 5px 15px rgba(0,0,0,0.1); }

/* Cursos */
.section-title { text-align: center; font-family: 'Playfair Display'; font-size: 2.5rem; margin: 4rem 0 3rem; color: var(--raspberry); }
.courses-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; padding: 0 5% 4rem; align-items: center; }
.course-card { background: white; border-radius: 15px; overflow: hidden; border: 1px solid var(--blush); transition: 0.3s; height: fit-content; }
.course-card:hover { transform: translateY(-10px); }
.course-img { height: 200px; background-size: cover; background-position: center; }
.course-info { padding: 1.5rem; }

/* Precios y TikTok Center */
.pricing-container { padding: 4rem 5%; background: white; }
table { width: 100%; max-width: 800px; margin: 0 auto; border-collapse: collapse; background: var(--champagne); border-radius: 15px; overflow: hidden; }
th, td { padding: 1.5rem; text-align: center; border-bottom: 1px solid var(--blush); }
th { background: var(--raspberry); color: white; }
.price-tag { font-size: 1.5rem; font-weight: 700; color: var(--raspberry); }
.tiktok-center { display: flex; justify-content: center; margin-top: 40px; }

/* Botones */
.btn { display: inline-block; padding: 1rem 2rem; background: var(--raspberry); color: white; border-radius: 50px; border: none; cursor: pointer; font-weight: 600; text-decoration: none; }

/* Dashboard */
.course-player { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; padding: 2rem 5%; }
.video-placeholder { aspect-ratio: 16/9; background: #222; border-radius: 15px; display: flex; justify-content: center; align-items: center; color: white; font-size: 3rem; }
.modulo-header { background: var(--raspberry); color: white; padding: 15px; cursor: pointer; display: flex; justify-content: space-between; margin-top: 10px; border-radius: 5px; }
.modulo-content { max-height: 0; overflow: hidden; transition: 0.3s; background: white; }
.modulo-content.active { max-height: 200px; padding: 15px; border: 1px solid var(--blush); }

/* Modal */
.overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: none; justify-content: center; align-items: center; z-index: 2000; }
.enroll-form { background: white; padding: 2.5rem; border-radius: 20px; width: 90%; max-width: 400px; }
.enroll-form input { width: 100%; padding: 0.8rem; margin-bottom: 1rem; border: 1px solid var(--blush); border-radius: 8px; }
.btn-close { background: none; border: none; color: #999; cursor: pointer; margin-top: 15px; width: 100%; text-decoration: underline; }

footer { background: var(--raspberry); color: white; padding: 3rem; text-align: center; }

@media (max-width: 768px) {
    .hero, .course-player { flex-direction: column; text-align: center; }
    .hero h1 { font-size: 2.5rem; }
}
