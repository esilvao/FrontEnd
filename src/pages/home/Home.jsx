import './Home.css'
import CarrucelHome from '../../components/carrucelHome/CarrucelHome';
import LoMasVendido from '../../components/loMasVendidio/LoMasVendido';


const Home = () => {
  return (
    <>
      <div className="p-2 mb-2 mt-2 bg-dark bg-gradient text-white rounded-5 d-flex justify-content-center">Despachos gratis en Santiago por compras sobre 50.000 </div>
      <CarrucelHome />
      <LoMasVendido />

    </>
  )
}
export default Home