import { Fragment } from "react";
import './Geomembrane.css'
import Navbar from './Navbar'
import Footer from './Footer'

function Geomembrane() {
    return (
        <Fragment>
            <Navbar />
            <div className="container_geogrid">
                <img src="membra1.jpg"  />
                <div className="centered">Geomembrane</div>
            </div>

            <div className="container2_geogrid">

                <div className="isi_geogrid">
                    <p className="judul_geogrid">Geomembrane HDPE Sebagai Bahan Pelapis Tidak Tembus Cairan</p>
                </div>

                <div className='kotak_georid'>
                    <img className='gambar_georid' src="geo2.jpg" />
                    <div className='card_geogrid'>
                        <p className='judul_geogrid2'>Apa itu Geomembrane?</p>
                        <p className='text_geogrid2'>Geomembrane adalah material pelapis tidak tembus cairan (impermeable layer) yang tahan (tidak bereaksi) terhadap cairan/bahan kimia dan sinar ultraviolet matahari. Geomembrane terbuat dari bahan HDPE (High Density Polyethilene). Geomembrane digunakan pada aplikasi water pond, reservoir, danau buatan, bak penampungan limbah cair maupun padat, pelapis mud pit, pelapis lahan penampungan sampah, TPA (sanitary landfill), pelapis dasar tangki, biogas, ash yard, coal yard, kolam tambak, saluran air dan kanal.</p>
                    </div>
                    </div>
                    <p className="text_geogrid2">Selain itu, Geomembrane juga dapat digunakan sebagai liner pelapis konstruksi kolam penampungan baru atau sebagai pelapis konstruksi bak beton yang mengalami kebocoran. Untuk konstruksi baru, biasanya Geomembrane digelar langsung di atas galian tanah, tanpa harus dicor beton dahulu, sehingga sangat praktis dan mempermudah pelaksanaan pekerjaan.</p>
                
            </div>
            <Footer />
        </Fragment>
    )
}

export default Geomembrane
