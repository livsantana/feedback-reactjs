import iconStar from "./assets/icon-star.svg"

export function App() {
  return (
    <div className="h-svh bg-very-dark-blue text-white flex justify-center items-center px-6">
      <div className="bg-gradient max-w-103">
        <img src={iconStar} alt="icone da estrela" />

        <div>
          <input type="button" value={1}/>
          <input type="button" value={2}/>
          <input type="button" value={3}/>
          <input type="button" value={4}/>
          <input type="button" value={5}/>
        </div>

        <button>Submit</button>
      </div>
    </div>
  )
}