import React from 'react';
import '../styles/pages.css';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to BirdLab</h1>
      <section className="lab-intro">
        <p>
          Hii peeps! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit vero ipsa doloribus maiores enim minima, numquam nisi autem voluptatibus, est consectetur vitae eos recusandae consequatur ex temporibus, labore placeat?
        </p>
      </section>
      <section className="recent-highlights">
        <h2>Recent Highlights</h2>
        {/* Add recent research highlights or news */}
      </section>
    </div>
  );
}

export default Home;