import React, { Component } from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import { Container, Header, Content, Icon, List, Text, Accordion, View, ListItem } from 'native-base';



import {queryAllJourneys} from "./RealmSetup";

class TrainJourneyList extends Component {

    state = {
        travelList: [],
        travelListDisplayed: [],
        name: 'hello'
    };

    componentDidMount() {
        this.reloadData()
    }


    reloadData = () => {
        queryAllJourneys().then((list) => {
            let partList = list.slice(0, 10);
            this.setState({
                travelListDisplayed: list,
                travelList: list
            });
        }).catch(error => {
            console.log("error in reloading Train Journey list", error);
        });
        console.log('reloadData')
    };

    handleLoadMore = () => {
        // this.setState({
        //     travelListDisplayed: this.state.travelList.slice(0, 20),
        // });
    };

    _renderHeader(item, expanded) {
        return (
            <View>

                <View style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center" ,
                    backgroundColor: "#eeeeee" }}
                >
                    <Text>{item.departing + " -> " + item.destination}</Text>
                    {/*<Text style={{ fontWeight: "600" }}>*/}
                    {/*    {" "}{item.title}*/}
                    {/*</Text>*/}
                    {/*{expanded*/}
                    {/*    ? <Icon style={{ fontSize: 18 }} name="close" />*/}
                    {/*    : <Icon style={{ fontSize: 18 }} name="arrow-down" />}*/}
                </View>
            </View>

        );
    }
    _renderContent(item) {
        return (
            <View>
                <Text
                    style={styles.itemText}>
                    {"Ticket Type: " + item.ticketType}
                </Text>
                <Text
                    style={styles.itemText}>
                    {"Cost: " + item.totalCost}
                </Text>
                <Text
                    style={styles.itemText}>
                    {"Railcard: " + item.railcard }
                </Text>
            {/*<Text*/}
            {/*    style={{*/}
            {/*        backgroundColor: "#e3f1f1",*/}
            {/*        padding: 10,*/}
            {/*        fontStyle: "italic",*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {item.content}*/}
            {/*</Text>*/}
            </View>
        );
    }

    render() {
        // const {noiseList} = this.state;
        return (
            <Container style={styles.container}>
                {/*<Accordion dataArray={this.state.travelList}*/}
                {/*           expanded={0}*/}
                {/*           initialListSize={100}*/}
                {/*           animation={false}*/}
                {/*           renderHeader={this._renderHeader}*/}
                {/*           renderContent={this._renderContent}/>*/}




                <FlatList
                    //https://facebook.github.io/react-native/docs/flatlist.html#scrolltoitem
                    data={this.state.travelListDisplayed}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    keyExtractor={item => item.id}
                    renderItem={({item: journey}) => (
                        <View style={{
                            flexDirection: "row",
                            padding: 10,
                            justifyContent: "space-between",
                            alignItems: "center" ,
                            backgroundColor: "#eeeeee" }}
                        >
                            <Text>{journey.departing + " -> " + journey.destination}</Text>
                            {/*<Text style={{ fontWeight: "600" }}>*/}
                            {/*    {" "}{item.title}*/}
                            {/*</Text>*/}
                            {/*{expanded*/}
                            {/*    ? <Icon style={{ fontSize: 18 }} name="close" />*/}
                            {/*    : <Icon style={{ fontSize: 18 }} name="arrow-down" />}*/}
                        </View>
                    )
                        // <Text style={styles.item}>{journey.departing + " -> " +journey.destination + " " + journey.totalCost}</Text>
                    }

                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        paddingLeft: 0,
    },
    list: {
        margin: 0,
        paddingLeft: 0,
    },
    item: {
        backgroundColor: '#ff4ec7',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    itemText: {
        backgroundColor: "#f5f5f5",
        padding: 10,
        fontStyle: "italic",
    }
});

export default TrainJourneyList
