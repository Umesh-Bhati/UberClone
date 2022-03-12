import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles.js';
import UberTypeRow from '../UberTypeRow';

import {types} from "../../global/data"

const UberTypes = ({ typeState, onSubmit }) => {
  const [selectedType, setSelectedType] = typeState;

  return (
    <View>
      {types.map((type) => (
        <UberTypeRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <TouchableOpacity onPress={onSubmit} style={{
        backgroundColor: 'black',
        paddingVertical: 15,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm Uber
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UberTypes;