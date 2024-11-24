export default function Navbar() {
  return (
    <>
      <div className="flex justify-around items-center p-3 mb-5 shadow-lg bg-[#ffffffb5]">
        <div>
          <span>Marcello Comandulli</span><br/>
          <span>Junior Front End Developer</span>
        </div>
        <div>
            <ul className="flex space-x-3">
               <li>Home</li>
               <li>Work</li>
               <li>About</li>
               <li>Contatti</li>
            </ul>
        </div>
      </div>
    </>
  );
}
