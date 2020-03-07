import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Background from '../../components/SignedBackground';
import AvatarEdit from '../../components/AvatarEdit';

import {signOut} from '../../store/modules/auth/actions';
import {updatePlayerRequest} from '../../store/modules/player/actions';

import {
  Container,
  Title,
  Subtitle,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Player() {
  const dispatch = useDispatch();

  const player = useSelector(state => state.player.player);
  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSubmit() {
    dispatch(
      updatePlayerRequest({
        player: {
          name,
          email,
          oldPassword,
          password,
          confirmPassword,
        },
      }),
    );
  }

  const [name, setName] = useState(player.name);
  const [email, setEmail] = useState(player.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
        <Subtitle>Mantenha seu perfil atualizado</Subtitle>
        <Form>
          <AvatarEdit />
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua nova senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Atualizar
          </SubmitButton>
          <LogoutButton loading={loading} onPress={handleLogout}>
            Sair do Canastrinha
          </LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}
