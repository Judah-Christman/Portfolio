export default function Footer(){
  return(<div className="w-full h-20 p-2 relative bg-green-400 flex justify-between">
      <p className="m-auto">Judah Christman 2025</p>
      <a href="https://github.com/Judah-Christman" target="_blank">
        <img
          src="/images/github.png"
          width={30}
          height={30}
          className="block my-auto"
          alt="github"
        />
      </a>
    </div>);
}