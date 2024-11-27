export default function Footer() {
  return (
    <>
      <footer>
        <div className="h-10 shadow-inner flex justify-around items-center">
          <div>
            <h4>
              &copy; 2024 Marcello Web Developer. Tutti i diritti riservati.
            </h4>
          </div>

          <div className="flex space-x-2">
            <a href="https://www.instagram.com/_.melloo__/" target="_blank">
              <img
                src="../../public/img/social/instagram.png"
                alt="Profilo Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/marcello.coma?mibextid=LQQJ4d&rdid=AwK4sZdv5srov6K2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15QnRS2Avt%2F%3Fmibextid%3DLQQJ4d"
              target="_blank"
            >
              <img
                src="../../public/img/social/facebook.png"
                alt="Profilo Facebook"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/marcello-comandulli/"
              target="_blank"
            >
              <img
                src="../../public/img/social/linkedin.png"
                alt="Profilo LinkedIn"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
