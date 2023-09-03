import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  tittleCard: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    paddingBottom:20
  },
  subtittleCard: {
    fontSize: 12,
    fontWeight: 'semibold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff"
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    opacity: 0.75,
    borderRadius: 8
  },
});