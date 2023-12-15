type ShowMoreProps = {
  onClick: ()=>void;
}
export function ShowMore({onClick}:ShowMoreProps) {
  return (
    <div className="catalog__more">
      <button className='catalog__button' type="button" onClick={onClick}>
        Show more
      </button>
    </div>
  );
}
