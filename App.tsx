import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  Dimensions,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import Wallet from 'react-native-wallet';
import styled from 'styled-components/native';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const App = () => {
  const ref = useRef();
  const checkPassFunctionality = () => {
    Wallet.canAddPasses(added => {
      console.log(added);
    });
  };

  const addPassFromUrl = async () => {
    const response = await Wallet.showAddPassControllerFromURL(
      'https://perttu.dev/Qvikfast.pkpass',
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{flex: 1}}>
          <VideoContainer>
            <Video
              disableFocus={true}
              ref={ref}
              repeat={true}
              style={{
                width: width,
                height: height / 3,
              }}
              source={require('./assets/trimmed.mp4')}
            />

            <Card>
              <H1>Ticket for Qvik Breakfast</H1>
              <H2>Lucky you!</H2>
            </Card>
          </VideoContainer>

          <Container>
            <P>
              Congratulations! You've unlocked a free ticket for have breakfast
              with the awesome people from Qvik.
            </P>
            <P>
              This breakfast ticket is valid for single Qvik Friday Breakfast.
              You can add the ticket to your Apple Wallet below.
            </P>

            <QvikButton onPress={addPassFromUrl}>
              <QvikButtonText>Add to Wallet</QvikButtonText>
            </QvikButton>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

const Container = styled.View`
  margin: 10px 20px;
  flex: 1;
  justify-content: space-between;
`;

const H1 = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: #000;
  background-color: white;
  font-family: 'ZillaSlab-SemiBold';
`;

const H2 = styled.Text`
  margin-top: 20px;
  font-size: 23px;
  font-weight: bold;
  color: white;
  background-color: black;
  font-family: 'ZillaSlab-SemiBold';
`;

const H3 = styled.Text`
  font-size: 23px;
  margin: 30px 0px;
  font-family: 'ZillaSlab-SemiBold';
`;

const P = styled.Text`
  margin-top: 30px;
  font-family: 'ZillaSlab-SemiBold';
  font-size: 18px;
`;

const Startdust = styled.Image`
  width: 100%;
  height: 100%;
`;

const Card = styled.View`
  position: absolute;
  left: 0;
  right: 0;

  bottom: 0;
  top: 0;
  margin: 20px;
  align-items: flex-start;
  justify-content: center;
`;

const QvikButton = styled.TouchableOpacity`
  border-width: 3px;
  padding: 20px;
  margin: 20px;
  align-items: center;
  justify-content: center;
  border-color: black;
`;

const QvikButtonText = styled.Text`
  text-align: center;
  font-size: 25px;
  font-family: 'ZillaSlab-SemiBold';
`;

const VideoContainer = styled.View`
  height: ${height / 3};
  width: ${width};
`;
