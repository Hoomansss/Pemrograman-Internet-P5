import Profile2 from '../assets/AZKi2.jpg'

function Home() {
  return (
    <header className="Home">
      <h1>About Me</h1>
      <section className="bio">
      <img src={Profile2} alt="AZKi" />
      <p>
          Selamat Datang di website tentang Biodata Saya.
          Saya adalah Fitra Ramadan, seorang mahasiswa di Program Studi Pendidikan
          Ilmu Komputer di Kampus Universitas Pendidikan Indonesia.
      </p>
      </section>
    </header>
  )
}

export default Home