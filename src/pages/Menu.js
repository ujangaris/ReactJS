import { useState } from 'react';
import Table from "./Table";

function Menu() {
    const [menus, setMenu]=useState(
        [
            {
                idmenu:5,
                idkategori:3,
                menu:"Es Teh",
                gambar:"esteh.jpg",
                harga:7000,
            },
            {
                idmenu:1,
                idkategori:2,
                menu:"Es Jeruk",
                gambar:"esjeruk.jpg",
                harga:10000,
            },
            {
                idmenu:2,
                idkategori:3,
                menu:"Roti Bakar",
                gambar:"rotibakar.jpg",
                harga:15000,
            }
        ]
    )
    return (
        <div className="App">
           <Table menu={menus}/>
        </div>
    );
}

export default Menu;