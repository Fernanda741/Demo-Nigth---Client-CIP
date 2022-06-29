import React, { useState, useEffect } from "react";
import ComponentMenu from "../../Components/Menu";
import { getAccounts } from "../../api/index";
import { Account } from "../../Components/Account";

export default function BillCorrent() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts()
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data.content);
      });
  }, []);

  return (
    <>
      <ComponentMenu />
      <section>
        <ul>
          {accounts.map((item) => {
            return (
              <div key={item.id}>
                <Account
                  agencia={item.agencia}
                  nomeBanco={item.nomeBanco}
                  conta={item.conta}
                  cliente={item.cliente}
                />
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
}
