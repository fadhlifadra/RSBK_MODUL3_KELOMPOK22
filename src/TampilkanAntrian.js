import React, { Component } from "react";
import { Input } from 'antd';

const { Search } = Input;
const onSearch = value => alert(`Mohon maaf, fitur pencarian masih dalam proses maintenance, sehingga data pencarian Anda tidak bisa kami proses.`);; 


class TampilkanAntrian extends Component {
    render() {
        return (
            <div>
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
        );
    }
    componentWillUnmount() {
        
    }
}
export default TampilkanAntrian;