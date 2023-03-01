import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react';


function CountriesDetails({ countryCode, filterCountry }) {

    const [country, setCountry] = useState([])

    useEffect(async () => {
        await fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(countries => countries.json())
            .then(countries => {
                setCountry(countries)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            {/* <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td style={{ width: '30%' }}>Region</td>
                        <td>{region}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders.map((border, i) =>
                                    <li key={`${border}BRD`}>
                                        <NavLink to={`/${border}`} onClick={() => filterCountry(border)}>{border}</NavLink>
                                    </li>
                                )}


                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td>
                            <ul>
                                {languagesArr.map(language =>
                                    <li key={language}>
                                        <p>{languages[language]}</p>
                                    </li>
                                )}


                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table> */}
        </div >
    );
}

export default CountriesDetails;
