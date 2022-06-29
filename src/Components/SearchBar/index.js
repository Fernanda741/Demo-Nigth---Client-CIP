import IconButton from '../IconButton';
import './style.css';

export const SearchBar = () => {
  return (
    <>
      <section className="search-bar">
        <input placeholder="NOME" />
        <input placeholder="CPF" />
        <IconButton className="icon-search" />
      </section>
    </>
  );
};
