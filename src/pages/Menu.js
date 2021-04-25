import { useState } from 'react';

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
            <h1>Menu Restoran</h1>
            <div>
                {menus.map((data)=>
                <li key={data.idmenu}>{data.menu} Rp.{data.harga}</li>
                )}
            </div>
        </div>
    );
}

export default Menu;