import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#282a36',
    alignItems: 'center',
    paddingTop: 60, 
  },
  clockTitle: {
    fontSize: 65,
    letterSpacing: 10,
    color: '#bd93f9',
    paddingBottom: 30,
    shadowOpacity: 0.5,
  },
  dateInfo: {
    fontSize: 20,
    color: '#fff',
  },
  clockInfo: {
    width: '70%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: '#44475a',
    fontSize: 32,
    color: '#fff',
    letterSpacing: 5,
    marginBottom: 20,
  },
  buttonWrapper: {
    flex: 0.09,
    width: '55%',
    marginTop: 15,
    backgroundColor: '#44475a',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mainTimer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    marginTop: 35,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: '#44475a',
  },
  timerStatus: {
    fontSize: 28,
    color: '#ff79c6',
    fontWeight: '300',
  },
  balance: {
    paddingTop: 20,
    fontSize: 15,
    color: 'white',
  }
});
