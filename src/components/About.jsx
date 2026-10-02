import Profile from '../assets/AZKi.png'
import Song from '../assets/c418.jpg'
import Anime from '../assets/lord.jpg'
import Games from '../assets/mc.jpg'
import Comic from '../assets/orv.jpg'
import develope from '../assets/develope.jpg'

function About() {
  return (
    <main className="sections">
      <section className="bio">
        <img src={Profile} alt="AZKi" />
        <p>
          Saya memiliki beberapa hobi diantaranya, saya suka
          mendengarkan musik, bermain game, membaca buku komik, dan menonton anime.
          Saya juga memiliki minat dalam Game Development.
        </p>
      </section>

      <hr className="divider" />

      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Mendengarkan musik</li>
          <img src={Song} alt="Musik" />
          <li>Bermain game</li>
          <img src={Games} alt="Game" />
          <li>Membaca buku komik</li>
          <img src={Comic} alt="Komik" />
          <li>Menonton anime</li>
          <img src={Anime} alt="Anime" />
          <li>Game Development</li>
          <img src={develope} alt="dev" />
        </ul>
      </section>
    </main>
  )
}

export default About
