import "./itemlistcontainer.css";
export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className="itemlist-container">
        <h2 className="greetings">{greeting}</h2>
      </div>
    </>
  );
};
