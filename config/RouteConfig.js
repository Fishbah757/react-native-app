import { StackNavigator } from 'react-navigation';
import PhotosList from '../components/PhotosList';
import Photo from '../components/Photo';

export const RouteConfig = StackNavigator({
  PhotosList: {
    screen: PhotosList,
    navigationOptions: {
      title: 'Beautiful Photos',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    },
  },
  Photo: {
    screen: Photo,
    navigationOptions: {
      title: 'Photo',
      headerTitleStyle: {
        alignSelf: 'center',
        marginLeft: -40,
      },
    },
  },
});