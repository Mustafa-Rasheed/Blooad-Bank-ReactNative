import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './screens/profile/home'
// const Home = () => <Text>Music</Text>;
import fetchdata from './screens/profile/fetchdata'
// const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Profile = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', icon: 'home' },
    { key: 'albums', title: 'Blood', icon: 'water' },
    { key: 'recents', title: 'Heart', icon: 'heart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Home,
    albums: fetchdata,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Profile;





























// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';
// import LoginScreen from './screens/login/login'
// import SignupScreen from './screens/signup/signup'


// const MyComponent = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'Login', title: 'Login', icon: 'login' },
//     { key: 'Signup', title: 'Signup', icon: 'account' },
    
//   ]);

  

//   const renderScene = BottomNavigation.SceneMap({
//     Login: LoginScreen,
//     Signup: SignupScreen,
//       });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };

// export default MyComponent;