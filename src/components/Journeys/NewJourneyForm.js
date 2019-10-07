import React, {Component} from 'react';
import {Modal, StyleSheet, ToastAndroid} from 'react-native';
// import {validateUserDetails} from "../../utilities";
import {
    Body,
    Button,
    Form,
    Header,
    Icon,
    Input,
    Item,
    Label,
    Left,
    Right,
    StyleProvider,
    Text,
    Title,
    View,
    Content,
    ListItem,
    CheckBox,
    Container
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
// import getTheme from '../../../native-base-theme/components';

// Icons using ionicons
// https://ionicons.com/cheatsheet.html

class NewJourneyModal extends Component {
    state = {
        modalVisible: false,
        datePickerVisible: false,
        chosenDate: new Date(),
        railcardUsed: false

    };


    storeNewJourney = () => {

    };

    // Validation = () => {
    //     console.log(this.state.Email, this.state.Password);
    //     validateUserDetails(this.state.Email, this.state.Password).then((response) => { //response will return with a status code or a key
    //         console.log(response);
    //         ToastAndroid.show('Successfully Logged in!', ToastAndroid.LONG); //confirming the login is successful to the user
    //         this.setModalVisible(!this.state.modalVisible); //closing the modal when logged in.
    //         this.props.setLoginState(true, response.data.data.user.email);
    //         return response //returning the response
    //
    //
    //     }).catch((error) => { //error handling if the post rejects
    //         console.log(error);
    //         return ToastAndroid.show('Error Logging in, Please try again!', ToastAndroid.LONG); //if not send an alert
    //         // Alert.alert("Didn't work, try again")
    //     })
    // };


    setDate = (event, date) => {
        this.setState({datePickerVisible: false});
        if (event.type === "dismissed") {
            this.setState({ chosenDate: new Date() });
        } else {
            this.setState({ chosenDate: date });
        }
        console.log(event)
    };

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    };

    setDatePickerVisible = () => {
        this.setState({datePickerVisible: true});
    };

    setRailcardUsed = (value) => {
        this.state.railcardUsed = value;
        // this.setState({railcardUsed: value});
    };



    render() {
        // const { modalVisible, datePickerVisible, chosenDate } = this.state;
        return (
            <View>

                    <Button transparent
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                        <Icon style={{color: 'white'}} name='add' />
                    </Button>

                    <Modal
                        animationType="fade"
                        transparent={false}
                        visible={this.state.modalVisible}>
                        <View style={{margin: 22}}>

                            <Header noLeft style={styles.HeaderStyle}>
                                <Left/>
                                <Body>
                                    <Title>New Train Journey</Title>
                                </Body>
                                <Right />
                            </Header>

                            <Form>
                                <Item floatingLabel>
                                    <Label>Departing Station</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Destination Station</Label>
                                    <Input />
                                </Item>

                                <Button block primary
                                        onPress={this.setDatePickerVisible}
                                        style= {styles.LoginButton}>
                                    {/*<Icon name='md-log-in'/>*/}
                                    <Text>Date: {this.state.chosenDate.toDateString()}</Text>
                                </Button>

                                {/* New datetime picker https://github.com/react-native-community/react-native-datetimepicker */}
                                { this.state.datePickerVisible && <DateTimePicker
                                    mode={'date'}
                                    value={this.state.chosenDate}
                                    maximumDate={new Date()}
                                    onChange={this.setDate}
                                    display={"default"}/>
                                }

                                <ListItem>
                                    <Body>
                                        <Text>Used Railcard</Text>
                                    </Body>
                                    <CheckBox checked={this.state.railcardUsed}
                                              onPress={() => this.setRailcardUsed(!this.state.railcardUsed)}
                                    />
                                </ListItem>


                                <Item floatingLabel
                                      style={styles.passwordtext}>
                                    <Label>Password</Label>
                                    <Input
                                        secureTextEntry={true}
                                        onChangeText={(Password) => this.setState({Password})}
                                        value={this.state.Password}
                                    />
                                </Item>
                            </Form>


                            <Button block primary
                                    // onPress={() => {
                                    //     this.setModalVisible(!this.state.modalVisible);
                                    // }}
                                    style= {styles.CancelButton}>
                                <Icon name='save'/>
                                <Text>Save</Text>
                            </Button>


                            <Button block primary
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                    style= {styles.CancelButton}>
                                <Icon name='ios-close-circle-outline'/>
                                <Text>Cancel</Text>
                            </Button>


                        </View>
                    </Modal>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    HeaderStyle:{
        position: 'relative',
        marginLeft: -22,
        marginRight: -22,
        marginTop: -22

    },
    LoginButton:{
        position: 'relative',
        marginTop: 20,
    },
    CancelButton:{
        position: 'relative',
    },
    emailtext: {
        position: 'relative',
        padding: 20
    },
    passwordtext:{
        position: 'relative',
    },
    CreateAccountButton:{
        position: 'relative',
    },
    CreateAccountText:{
        position: 'relative',
        padding: 20,
        marginLeft: 25,
        color: '#018a99'
    }
});



export default NewJourneyModal
