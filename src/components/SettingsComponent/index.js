import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';
import styles from './styles';


const SettingsComponent = ({
  settingsOptions,
  modalVisible,
  setModalVisible,
  preference,

}) => {

  return (
    <ScrollView style={styles.wrapper}>
      {settingsOptions.map(({ title, subTitle, onPress }, index) => {
        return (
          <TouchableOpacity key={index} onPress={onPress}>
            <View style={styles.option}>
              <Text style={styles.title} >{title}</Text>
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

            {modalVisible &&
              <AppModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                modalTitle='Sort By'
                closeOnTouchOutside={false}
                modalBody={(<View>
                  {preference.map(({ name, selected, onPress }, index) => (

                    <TouchableOpacity key={index} onPress={onPress} style={styles.bodyTouchable} >
                      {selected &&
                        <Icon name='check' type='material' size={17} />
                      }
                      <View style={!selected && styles.viewBodyText}>
                        <Text style={styles.bodyText}>{name}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
                  }
                </View>)
                }
              // modalFooter={<></>}

              />
            }
            <View style={styles.divisionLine}></View>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  );
}





export default SettingsComponent;
