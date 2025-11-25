import './Home.css'
import { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
    return (
        <Fragment>
            <Navbar />

            <div className="parent_geogrid">
                <img src="img1.png"  />
                <div className="apa_tengah">Multibangun</div>
            </div>

            <div className='container_home'>
                <div className='kotak_home'>
                    <img className='gambar' src="img1.png" />
                    <div className='card_home'>
                        <p className='judul_home'>Perusahaan Indonesia yang bergerak di bidang industri geosintetik sejak didirikan tahun 1998.</p>
                        <p className='text_home'>PT Multibangun Rekatama Patria telah menangani ratusan proyek yang tersebar di seluruh Indonesia. Kami selalu menjaga kualitas material dan pekerjaan dengan didukung ketersediaan material "ready stock" sehingga kebutuhan di lapangan tidak terhambat.</p>
                    </div>
                </div>

                <div className='kotak_home'>
                    <img className='gambar' src="img2.png" />
                    <div className='card_home'>
                        <p className='judul_home'>Alasan Memilih Kami</p>
                        <p className='text_home'>Jangan ragu untuk menggunakan material geosintetik dan jasa pemasangan dari kami. Dengan pengalaman yang kami miliki, kepuasan pelanggan adalah orientasi utama kami. Keunggulan PT. Multibangun Rekatama Patria didukung dengan kualitas material dan jasa ahli profesional yang dapat dipertanggung jawabkan.</p>
                        <p className='text_home'>Project Web : <br/><br/> Novriza Rahayu (23033110678) <br></br></p>
                    </div>
                </div>
            </div>


            <Footer />
        </Fragment>
    )
}

export default Home