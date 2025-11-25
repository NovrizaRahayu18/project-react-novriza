import { Fragment } from "react";
import './Kontak.css'
import Navbar from './Navbar'
import Footer from './Footer'

function Kontak() {
    return (
        <Fragment>
            <Navbar />
            <div className="con_kontak">
                <img className="atas" src="kontak1.png"  />
                <div className="text_tengah">Kontak Kami</div>
            </div>

            <div className="parent_kontak">
                <img className="bawah" src="kontak.png" />

                <div className="isi">
                <form>
                    <input type="text"  placeholder="Nama" />
                    <input type="text"  placeholder="Email" />
                    <input type="text"  placeholder="Telepon" />
                    <textarea type="text"  placeholder="Pesan" />
                </form>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Kontak