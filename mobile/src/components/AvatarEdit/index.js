import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import {AvatarButton} from './styles.js';

export default function AvatarEdit() {
  const player = useSelector(state => state.player.player);
  const token = useSelector(state => state.auth.token);

  function handlePickImage() {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setAvatar(response.uri);
        // handleUpload(response.uri);
      }
    });
  }
  function handleUpload(file) {
    const myHeaders = new Headers();

    myHeaders.append('content-type', 'multipart/form-data');
    myHeaders.append('Authorization', `Bearer ${token}`);

    fetch('http://localhost:3333/files', {
      method: 'POST',
      headers: myHeaders,
      body: {
        file: file,
      },
    });
  }

  const [avatar, setAvatar] = useState(
    `http://localhost:3333/files/${player.avatar}`,
  );
  return (
    <AvatarButton
      rounded
      size="large"
      source={{
        uri: avatar
          ? avatar
          : `https://api.adorable.io/avatars/100/${player.name}.png`,
      }}
      showEditButton
      onPress={handlePickImage}
    />
  );
}
