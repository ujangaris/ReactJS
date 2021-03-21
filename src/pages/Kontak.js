const css = {
    color: "red",
    background: "blue",
    fontSize: 50
}

function Kontak() {
    return (
        <div className="App">
            <h1 className="judul">Kontak Belajar React</h1>
            <p style={css}>Jakarta</p>
        </div>
    );
}

export default Kontak;