import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface SkillProps extends TouchableOpacityProps {
  skill: {
    name: string;
  }
}
export function Card({skill, ...rest}: SkillProps) {
  return (
      <TouchableOpacity {...rest} style={styles.buttonSkill}>
        <Text style={styles.textSkill}>{skill.name}</Text>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },

  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});