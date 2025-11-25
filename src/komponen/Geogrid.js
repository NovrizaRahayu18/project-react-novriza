import { Fragment } from "react";
import './Geogrid.css'
import Navbar from './Navbar'
import Footer from './Footer'

function Geogrid() {
    return (
        <Fragment>
            <Navbar />

            <div className="container_geogrid">
                <img src="geo1.jpg"  />
                <div className="centered">Geogrid</div>
            </div>

            <div className="container2_geogrid">

                <div className="isi_geogrid">
                    <p className="judul_geogrid">Tensar Geogrid</p>
                    <p className="text_geogrid">PT Multibangun Rekatama Patria adalah distributor tunggal (sole distributor) produk-produk Tensar di Indonesia yang telah berpengalaman lebih dari 20 tahun di Indonesia. Tensar telah memproduksi dan mengembangkan teknologi Geogrid sejak 30 tahun yang lalu, sehingga produk yang dihasilkan berkualitas dan dipercaya di dunia konstruksi international. </p>
                    <p className="text_geogrid">Geogrid adalah material geosintetik yang memberikan fungsi stabilisasi dan penguatan pada agregat dan tanah. Desainnya terdiri dari pola dua dimensi dari tulang rusuk untuk membentuk serangkaian lubang atau ruang terbuka, memungkinkan geogrid untuk menstabilkan dan memperkuat material tanah. Tensar Geogrid digunakan sebagai solusi untuk masalah teknik sipil dan geoteknik di dalam atau di atas tanah. Tensar Geogrid memberikan fungsi stabilisasi atau perkuatan tanah.</p>
                </div>

                <div className='kotak_georid'>
                    <img className='gambar_georid' src="geo2.jpg" />
                    <div className='card_geogrid'>
                        <p className='judul_geogrid'>Tensar InterAx Geogrid</p>
                        <p className='text_geogrid2'>Tensar InterAx Geogrid merupakan inovasi terbaru stabilisasi tanah dasaruntuk tanah lunak, yang dapat mengurangi biaya secara keseluruhan, mengurangi waktu konstruksi, dan memberikan ketahanan proyek</p>
                    </div>

                    <img className='gambar_georid' src="geo3.jpg" />
                    <div className='card_geogrid'>
                        <p className='judul_geogrid'>Tensar TriAx Geogrid</p>
                        <p className='text_geogrid2'>Tensar TriAx Geogrid berfungsi sebagai stabilitas tanah dasar, khususnya pada tanah lunak. Triax Geogrid merupakan pengembangan dari Geogrid Biaxial, dengan performa yang lebih baik.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Geogrid