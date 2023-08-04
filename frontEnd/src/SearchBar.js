import React, { useState } from 'react'
import axios from 'axios';

const SearchBar = () => {
    const [cityData, setCityData] = useState(null);
    const [searchInput, setSearchInput] = useState(null);
    const submithandleChange = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/country`, { city: searchInput });
            setCityData(response.data);
            console.log('moedas', response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
            setCityData(null);
        }
    };
    return <div className='mt-4'>
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-4'>
                    <input
                        className='form-control text-center'
                        type="search"
                        placeholder="search the city ..."
                        // onChange={handleChange}
                        onChange={(e) => setSearchInput(e.target.value)}

                        value={searchInput} />
                    <br />
                    <button onClick={submithandleChange}>Pesquisar</button>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-12 col-md-4'>
                    {cityData && (
                        <div className="card mt-5" style={{ minHeight: 150, marginRight: 10, marginLeft: 10 }}>
                            <div className="card-body" >
                                <p className="">A temperatura para a cidade de <b>{cityData.name}</b> é de <b>{cityData.temp}</b> °C <br></br>
                                    A Moeda usada é <b>{cityData.coin}</b> <br></br>
                                    O numero total da população é <b>{cityData.population}</b> e o PIB é de <b>{cityData.gpd}</b></p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    </div>
};
export default SearchBar;