import React, { Component } from "react";
import TampilkanAntrian from './TampilkanAntrian';

class SelamatDatang extends Component {
    render() {
        return (
            <div>
                <TampilkanAntrian/>
            </div>
        );
    }
    componentDidMount() {
        alert(`Fitur Search masih dalam proses maintenance, silakan coba dengan resiko ditanggung oleh pengguna.`)
    }
}
export default SelamatDatang;