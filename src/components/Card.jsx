function Card({ src, id, updateScore }) {
  function handleClick() {
    updateScore(id);
  }

  return (
    <div className="card" key={id} onClick={handleClick}>
      <img src={src} />
    </div>
  );
}

export default Card;
