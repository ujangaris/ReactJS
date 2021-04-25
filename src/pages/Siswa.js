import Listsiswa from "./Listsiswa";

function Siswa() {

    const nama = ['joni', 'tya', 'eka']
    return (
        <div className="App">
            <Listsiswa judul={nama}/>
        </div>
    );
}

export default Siswa;