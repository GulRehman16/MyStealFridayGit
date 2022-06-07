import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Overlays} from '../../../components';
import {DataTable} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const optionsPerPage = [2, 3, 4];

const MyOrder = props => {
  const [visible, setVisible] = useState(false);
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    const backAction = () => {
      props.navigation.goBack();

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  }, []);

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle="dark-content"
            translucent={true}
          />
          <View
            style={{
              marginTop: 15,
              width: '90%',
              alignSelf: 'center',
            }}>
            <View style={{}}>
              <Header
                headerText1
                leftIcon
                lIconClr={'#fff'}
                leftIconProps={() => {
                  props.navigation.goBack();
                }}
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginVertical: 30,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 22,
                  fontWeight: 'bold',
                }}>
                My Orders
              </Text>
            </View>

            <View style={{width: '100%', alignSelf: 'center'}}>
              <DataTable style={{}}>
                <DataTable.Row style={{}}>
                  <DataTable.Title
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      Order No.
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      {' '}
                      Date
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      Status
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      Total
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      Action
                    </Text>
                  </DataTable.Title>
                </DataTable.Row>

                <DataTable.Row style={{}}>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>1</Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>
                      1/1/2022{' '}
                    </Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}> Pending</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>$30</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                    onPress={() => setVisible(!visible)}>
                    <Text style={{color: 'black', fontSize: 10}}>View</Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={{}}>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>2</Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>
                      1/1/2022{' '}
                    </Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}> Pending</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    {' '}
                    <Text style={{color: 'black', fontSize: 10}}>$30</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                    onPress={() => setVisible(!visible)}>
                    <Text style={{color: 'blue', fontSize: 10}}>View</Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={{}}>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>3</Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>
                      1/1/2022{' '}
                    </Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}> Pending</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    {' '}
                    <Text style={{color: 'black', fontSize: 10}}>$30</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                    onPress={() => setVisible(!visible)}>
                    <Text style={{color: 'black', fontSize: 10}}>View</Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={{}}>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>4</Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>
                      1/1/2022{' '}
                    </Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}> Pending</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    {' '}
                    <Text style={{color: 'black', fontSize: 10}}>$30</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                    onPress={() => setVisible(!visible)}>
                    <Text style={{color: 'black', fontSize: 10}}>View</Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={{}}>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>5</Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>
                      1/1/2022{' '}
                    </Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}> Pending</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    {' '}
                    <Text style={{color: 'black', fontSize: 10}}>$30</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                    onPress={() => setVisible(!visible)}>
                    <Text style={{color: 'black', fontSize: 10}}>View</Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={{}}>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>6</Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}>
                      1/1/2022{' '}
                    </Text>{' '}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    <Text style={{color: 'black', fontSize: 10}}> Pending</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'space-evenly'}}>
                    {' '}
                    <Text style={{color: 'black', fontSize: 10}}>$30</Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                    onPress={() => setVisible(!visible)}>
                    <Text style={{color: 'black', fontSize: 10}}>View</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <View style={{alignItems: 'center'}}>
                  <DataTable.Pagination
                    page={page}
                    numberOfPages={3}
                    onPageChange={page => setPage(page)}
                    label="1-2 of 6"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                  />
                </View>
              </DataTable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{marginVertical: 20}}>
        <Overlays
          popupcontent1
          visible={visible}
          toggleOverlay={() => setVisible(false)}
        />
      </View>
    </>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  // screenContainer: {
  //     flex: 1,
  //     backgroundColor: 'white',
  // },
});
