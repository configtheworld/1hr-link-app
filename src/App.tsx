import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="flex justify-center mb-16">
        <img
          src={import.meta.env.VITE_LINKEDIN_IMAGE_LINK}
          className="logo rounded-full w-[160px]"
          alt="deine logo"
        />
      </div>
      <h1 className="text-4xl md:text-[3.2rem]">
        Hallo, Ich bin {import.meta.env.VITE_NAME}
      </h1>
      <div className="mt-4 px-2">
        <code className="text-xl text-latin text-gray-300">
          {import.meta.env.VITE_DESCRIPTION}
        </code>
      </div>
      <div className="card">
        <div className="flex flex-col gap-4 items-center">
          <a
            className="w-full md:w-2/3 lg:w-2/3 xl:w-4/5"
            href={import.meta.env.VITE_BUTTON1_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full text-lg">
              {import.meta.env.VITE_BUTTON1_TEXT}
            </button>
          </a>
          <a
            className="w-full md:w-2/3 lg:w-2/3 xl:w-4/5"
            href={import.meta.env.VITE_BUTTON2_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full text-lg">
              {import.meta.env.VITE_BUTTON2_TEXT}
            </button>
          </a>
          <a
            className="w-full md:w-2/3 lg:w-2/3 xl:w-4/5"
            href={import.meta.env.VITE_BUTTON3_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full text-lg">
              {import.meta.env.VITE_BUTTON3_TEXT}
            </button>
          </a>
        </div>
        <p className="p-12">
          {import.meta.env.VITE_ALTERNATIVE_TEXT} {""}
          <a href={"mailto:" + import.meta.env.VITE_EMAIL}>
            <code>{import.meta.env.VITE_EMAIL} </code>
          </a>
        </p>
      </div>
      <em className="read-the-docs text-xs">
        {import.meta.env.VITE_SMALL_TEXT}
      </em>
    </div>
  );
}

export default App;
