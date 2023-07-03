import React from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';

import {useCounterProgram} from './providers/CounterProgramProvider';

export default function CounterInfo() {
  const {counterProgramId, counterAccountPubkey} = useCounterProgram();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer} />
      <View style={styles.buttonGroup}>
        <InfoButton
          title={'Program Id'}
          infoText={counterProgramId.toString()}
        />
        <InfoButton
          title={'Counter PDA'}
          infoText={counterAccountPubkey.toString()}
        />
      </View>
    </View>
  );
}

type InfoButtonProps = Readonly<{
  title: string;
  infoText: string;
}>;

function InfoButton({title, infoText}: InfoButtonProps) {
  return (
    <Button
      title={title}
      onPress={() => {
        Alert.alert(title, infoText, [{text: 'Ok', style: 'cancel'}]);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  counter: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  programInfoText: {
    fontSize: 18,
  },
  buttonGroup: {
    flexDirection: 'row',
    columnGap: 10,
    paddingTop: 8,
  },
});