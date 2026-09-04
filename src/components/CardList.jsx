function CardList({ objectList, handleClick }) {
  return objectList.map((item, index) => {
    return (
      <div className="card" key={index} onClick={() => handleClick(index)}>
        <img className="image" src={item.url} alt="modi" />
      </div>
    );
  });
}

export default CardList;
