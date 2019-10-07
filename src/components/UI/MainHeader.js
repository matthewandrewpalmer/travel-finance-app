import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import NewJourneyModal from "../Journeys/NewJourneyForm";

export default class MainHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='train' />
                    </Button>
                </Left>
                <Body>
                    <Title>Travel Finance</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='search' />
                    </Button>
                    <NewJourneyModal/>
                    <Button transparent>
                        <Icon name='more' />
                    </Button>
                </Right>
            </Header>
        );
    }
}