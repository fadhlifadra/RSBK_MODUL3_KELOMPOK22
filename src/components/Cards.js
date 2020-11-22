// https://ant.design/components/card/#
import React, { Component } from 'react';
import { Card, Row, Space } from 'antd';
// import SelectOption from '../elements/SelectOption';
import TambahAntrian from '../TambahAntrian';

function CardSaya(props) {
    return (
        <div>
            <Card
                hoverable
                style={{ width: 270 }}
                cover={<img alt="example" src={props.link} />}
                actions={[
                    <TambahAntrian/>
                  ]}
            >
               <h1>{props.layanan}</h1>
            </Card>
        </div>
    )
}

export default class Cards extends Component {
    render() {
        return (
            <Row align="center">
                <Space>
                    <div>
                        <CardSaya layanan="BPJS" link="https://imgur.com/wQ3DrWx.png" />
                    </div>
                    <div>
                        <CardSaya layanan="UMUM" link="https://imgur.com/19sKQwd.png" />
                    </div>
                    <div>
                        <CardSaya layanan="CUSTOMER SERVICE" link="https://imgur.com/LJeLuij.png" />
                    </div>
                </Space>
            </Row>
        );
    }
}
