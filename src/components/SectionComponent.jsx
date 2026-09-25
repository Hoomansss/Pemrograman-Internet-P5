import heroImg from '../assets/AZKi.png'

function SectionComponent() {
  return (
    <main className="sections">
      <section className="bio">
        <img src={heroImg} alt="AZKi" />
        <p>
          Saya adalah Fitra Ramadan, seorang mahasiswa di Program Studi Pendidikan
          Ilmu Komputer di Kampus Universitas Pendidikan Indonesia. Saya suka
          mendengarkan musik, bermain game, membaca buku komik, dan menonton anime.
          Saya juga memiliki minat dalam Game Development.
        </p>
      </section>

      <hr className="divider" />

      <section className="contact">
        <h2>Contact Person</h2>
        <p>Email: fcarier2006@gmail.com</p>
        <p>Phone: 087840438565</p>
      </section>

      <hr className="divider" />

      <section className="others">
        <h2>Other Platforms</h2>
        <div className="links">
          <a href="https://github.com/Hoomansss/">Github</a>
          <a href="https://www.instagram.com/mynamelsid/">Instagram</a>
        </div>
      </section>
    </main>
  )
}

export default SectionComponent
