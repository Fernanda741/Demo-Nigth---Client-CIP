import React, { useState, useEffect } from "react";
import ComponentMenu from "../../Components/Menu";
import { CheckingAccount } from "../../Components/CheckingAccount";
import { deleteClient, getClients } from "../../api/index";

export default function BillCorrent() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients()
      .then((response) => response.json())
      .then((data) => {
        setClients(data.content);
      });
  }, []);

  return (
    <>
      <ComponentMenu />
       <section>
        <ul>
          {clients.map((client) => {
            return (
              <div key={client.id}>
                <CheckingAccount client={client}></CheckingAccount>
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
}
