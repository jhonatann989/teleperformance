import React, {Fragment} from "react";

export class Countries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries : []
        }
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all", { method: "GET" })
        .then((countries => countries.json()))
        .then(countries=> this.setState({countries : countries}))
    }

    render() {
        return (
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%"}}>
                {this.state.countries.length > 0 &&
                    this.state.countries.map((item, index)=> (
                        <Fragment>
                            <div id="country" style={{border: "solid", margin: "10px",padding: "5px", alignContent: "center", flex: 1}}>
                                <img id="countryFlag" src={item.flag} width="100" height="100"/>
                                <h3 id="countryName">{item.name}</h3>
                                <h3 id="countryRegion">{item.region}</h3>
                                <h5 id="countrySubRegion">{item.subregion}</h5>
                            </div>
                        </Fragment>
                    ))
                }
            </div>
        )
    }
}