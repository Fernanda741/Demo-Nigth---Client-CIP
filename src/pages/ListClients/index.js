import { useEffect, useState } from 'react';
import { Client } from '../../Components/Client';
import { getClients } from '../../api/index';
import './style.css';
import { SearchBar } from '../../Components/SearchBar';
import ReactPaginate from 'react-paginate';

const handlePageClick = (event) => {
  console.log(event);
};

export const ListClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients()
      .then((response) => response.json())
      .then(
        (data) => {
          setClients(data.content);
        },
        [setClients]
      );
  }, []);

  return (
    <>
      <SearchBar />
      <h1 id="title">LISTA DE CLIENTES</h1>
      <section className="container-clients">
        <ul className="all-clients">
          {clients.map((client) => {
            return <Client key={client.id} client={client}></Client>;
          })}
        </ul>
        <ReactPaginate
          breakLabel="..."
          nextLabel="próxima >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={10}
          previousLabel="< anterior"
          renderOnZeroPageCount={null}
          containerClassName="page-container"
          pageClassName="page-item"
          activeClassName="page-active"
          pageLinkClassName="page-href"
          previousClassName="page-next"
          nextClassName="page-previous"
        />
      </section>
    </>
  );
};
