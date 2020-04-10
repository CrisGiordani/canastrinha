import React, {useEffect, useRef, useState} from 'react';
import {Image, Alert} from 'react-native';
import api from '../../../services/api';
import logo from '../../../assets/canastrinha.png';
import Background from '../../../components/SignedBackground';

import {
  Container,
  IconeView,
  Icone,
  Form,
  FormInput,
  DescriptionArea,
  RulesArea,
  SubmitButton,
} from './styles';

export default function LeaguesCreate({navigation}) {
  const descriptionRef = useRef();
  const rulesRef = useRef();

  async function handleSubmit() {
    try {
      const response = await api.post('leagues', {
        name,
        description,
        rules,
      });
      const id = response.data.id;
      Alert.alert('Sucesso!', 'Liga criada com sucesso!');
      setName();
      setDescription();
      setRules();
      navigation.goBack();
    } catch (err) {
      Alert.alert(err.name, err.message);
    }
  }

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rules, setRules] = useState('');

  return (
    <Background>
      <Container>
        <IconeView>
          <Icone
            uri={`https://www.tinygraphs.com/labs/isogrids/hexa16/${name}/?theme=duskfalling&numcolors=4&size=100`}
          />
        </IconeView>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Digite um nome para a Liga"
            returnKeyType="next"
            onSubmitEditing={() => descriptionRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <DescriptionArea
            placeholder="Descrição"
            multiline={true}
            numberOfLines={3}
            ref={descriptionRef}
            returnKeyType="next"
            onSubmitEditing={() => rulesRef.current.focus()}
            value={description}
            onChangeText={setDescription}
          />

          <RulesArea
            icon="lock-outline"
            placeholder="Regras"
            multiline={true}
            numberOfLines={10}
            ref={rulesRef}
            returnKeyType="send"
            value={rules}
            onChangeText={setRules}
          />

          <SubmitButton onPress={handleSubmit}>Criar Liga</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
