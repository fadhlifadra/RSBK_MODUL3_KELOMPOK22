import { Button } from "antd";
import React, { Component } from "react";
class TambahAntrian extends Component {
    state = {
        angka: 0
    }

    render() {
        return (
            <div>
                <h3>Nomor Antrian : {this.state.angka}</h3>
                <Button primary onClick={this.tambahAngka}>Antri</Button>
            </div>
        );
    }

    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    componentDidUpdate(currentProps, currentState, snapshot) {
        alert(`Anda ada di antrian: ${currentState.angka + 1}`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Pastikan berkas dan data telah sesuai sebelum mengonfirmasi antrian. Klik OK untuk melanjutkan mengantri, dan klik CANCEL jika berkas anda masih kurang.');
        }
}
export default TambahAntrian;