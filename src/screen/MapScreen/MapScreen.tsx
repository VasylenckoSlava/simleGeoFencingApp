import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import RNSimpleNativeGeofencing, {
  startMonitoring,
  stopMonitoring,
  addGeofence,
  removeAllGeofences,
} from 'react-native-simple-native-geofencing';

import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Button,
} from 'react-native';

// utils
import {Props} from './MapScreen.props';

// styles
import {styles} from './MapScreen.style';

export const MapScreen: React.FC<Props> = () => {
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [radius, setRadius] = useState('');
  useEffect(() => {
    // @ts-ignore
    RNSimpleNativeGeofencing.initNotification({
      channel: {
        title: 'Message Channel Title',
        description: 'Message Channel Description',
      },
      start: {
        notify: true,
        title: 'Start Tracking',
        description: 'You are now tracked',
      },
      stop: {
        notify: true,
        title: 'Stopped Tracking',
        description: 'You are not tracked any longer',
      },
      enter: {
        notify: true,
        title: 'Attention',
        description: 'You entered a [value] Zone',
      },
      exit: {
        notify: true,
        title: 'Left Zone',
        description: 'You left a [value] Zone',
      },
    });
  }, []);

  let geofences = [
    {
      key: 'geoNum1',
      latitude: latitude,
      longitude: longitude,
      radius: radius,
      value: 'yellow',
    },
  ];

  const _start = RNSimpleNativeGeofencing.startMonitoring(geofences);

  const _findCoordinates = async () => {
    await Geolocation.getCurrentPosition(
      (position: any) => {
        const location = JSON.stringify(position);
        setLocation(location);
      },
      (error: {message: string}) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={_findCoordinates}
        style={styles.coordsContainer}>
        <Text style={styles.textFindMyCoords}>
          Find My Coords? {!location && <Text>Press here</Text>}
        </Text>
        {location ? (
          <View style={styles.locationContainer}>
            <Text>Location: {location}</Text>
            <Button title={'Hide'} onPress={() => setLocation('')} />
          </View>
        ) : null}
      </TouchableOpacity>
      <TextInput
        placeholder={'Set latitude'}
        style={styles.textInput}
        value={latitude}
        onChangeText={(text) => setLongitude(text)}
      />
      <TextInput
        placeholder={'Set longitude'}
        style={styles.textInput}
        value={longitude}
        onChangeText={(text) => setLatitude(text)}
      />
      <TextInput
        placeholder={'Set radius'}
        style={styles.textInput}
        value={radius}
        onChangeText={(text) => setRadius(text)}
      />
      <Button title={'Set coordinates'} onPress={_start} />
    </View>
  );
};
