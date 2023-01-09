import Map from '../../components/Map/Map';

const Home = () => {
    return(
         <div className='container'>
            <div className="header">
            <h2 className='heading'>Território</h2>
            <p className="text-muted">Descrição</p></div>
            <div className="">
                <div className="">
                <Map/>
                </div>
            </div>
        </div>
    )
}
export default Home;