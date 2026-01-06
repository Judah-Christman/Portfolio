export default function Footer(){
  return(
    <div className="w-full h-30 p-2 relative bg-green-400 flex justify-center items-center">
      <p className="mx-10">Judah Christman 2025</p>
      <a className="mx-10 text-sm underline text-[#0f0e0e]" href="/downloads/Judah C. Resume.pdf" download >Download My Resume</a>
      <a href="https://github.com/Judah-Christman" target="_blank">
        <img
          src="/images/github.png"
          width={50}
          height={50}
          className="block my-auto"
          alt="github"
        />
      </a>
    </div>
  );
}