function Contact() {
  return (
    <div className="sections">
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

      <footer className="footer">
        <p>© {new Date().getFullYear()} Fitra Ramadan.</p>
      </footer>
    </div>
  )
}

export default Contact