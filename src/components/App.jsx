import { useState } from "react";
import Header from "./Header";
import Grid from "./Grid";
import Card from "./Card";

const gifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTliZDc1NWNkMjZpNzM4bWtkY2VoamF5OHdjdnd0ZG5zd293anBrdDhuNnNndnZ2aSZlcD12MV9naWZzX2dpZklkJmN0PWc/3o7bu12GHm4G5frn6U/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTliZDc1NWNkMWc3Z3h4Nzg3NHZodjJ2OXNsZnRlMDV2MWlncTdsaGlyY2dxdnk5NCZlcD12MV9naWZzX2dpZklkJmN0PWc/m82Z6oaf0TF1S/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTliZDc1NWNkZWtkYjJjNGswNzBsa2Fua2l5OWs4bmVuZnZlZ3k4OTNyc2R5Ymt3NiZlcD12MV9naWZzX2dpZklkJmN0PWc/5Q2IxBG6rG8nwsiUnd/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTliZDc1NWNkMXBnZ2pkN3AzM3puMzNxMTA1MHM4emtrcXA2NDl5c3h1bXhrNjJ6aCZlcD12MV9naWZzX2dpZklkJmN0PWc/phpryOprgqZWyecXn4/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTliZDc1NWNkZndyeG01ZmkxYngzZ29jcTN3OXhxbHhzbGRybndmMnhtdG5jbTk0aCZlcD12MV9naWZzX2dpZklkJmN0PWc/RYn7F4gHsj7tKOSaKi/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTliZDc1NWNkZzJwcWE1eGVkczZvdGZla3pnNG50djd3MGh3ZjNxc3IyaXZ1cWpodyZlcD12MV9naWZzX2dpZklkJmN0PWc/YbiHKB6WH8UiiV8bOY/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTliZDc1NWNkYW1jb3owNDJiMWUzcGc1ODJlOTlqZTFnZDByMW0yaDV2MTg5MHJ6YiZlcD12MV9naWZzX2dpZklkJmN0PWc/CFMrBYnUWPtw3JE3vV/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTliZDc1NWNkMm1tZ2YyOWowanE2eTA2Zjh1a2E5eW0ybmRoZWoxNXh1MG9wbzN5YiZlcD12MV9naWZzX2dpZklkJmN0PWc/GDJ6WJquvWJv4D1rVu/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTliZDc1NWNkaThwMnkwYjE5amxoOTBqeTYwd3JjYTZxZXl6b2tob2E3dzV1ZjlrNyZlcD12MV9naWZzX2dpZklkJmN0PWc/caBWW8ws5xN2qpRAVr/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTliZDc1NWNkbHVodGlyaWtqNmdkem92cWhuN2Rnbjlobnd1ZXU0OXd0eHdlOXZxNiZlcD12MV9naWZzX2dpZklkJmN0PWc/AuT0UcI1d2r5Lm1tQY/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTliZDc1NWNkeHlnOWk1bXU5dGUwYnZqa3ZtbWZua2J6czNsOXMxeG91c3FqZHc1MyZlcD12MV9naWZzX2dpZklkJmN0PWc/3oKIPdEEOoIiiXNiOQ/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTliZDc1NWNkamNveHdlZThrdGJwY2lyd3h0djhleHF2M2hjeWpyaThydHN6NXNqcyZlcD12MV9naWZzX2dpZklkJmN0PWc/QuRMSvYYYfIRO/giphy.gif",
];

//const cardList = gifs.map((item, index) => <Card src={item} key={index} updateScore={handleClick} />);

function App() {
  const [score, setScore] = useState(0);
  const [clickedList, setClickedList] = useState(new Set());
  let items = gifs.map((item, index) => {
    return <Card src={item} key={index} id={index} updateScore={handleClick} />;
  });

  function handleClick(id) {
    if (clickedList.has(id)) {
      setClickedList(new Set());
      setScore(0);
    } else {
      setScore(score + 1);
      console.log(score);
      setClickedList((prevSet) => {
        const temp = new Set(prevSet);
        temp.add(id);
        //console.log(clickedList);

        return temp;
      });
    }
  }

  return (
    <>
      <Header score={score} />
      <Grid items={shuffle(items)} key={score} />
    </>
  );

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

export default App;
