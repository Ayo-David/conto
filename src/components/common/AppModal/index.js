import React from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import PropTypes from 'prop-types'

const AppModal = ({
  modalVisible,
  setModalVisible,
  modalTitle,
  modalBody,
  modalFooter,
  closeOnTouchOutside,
}) => {
  return (

    < View >
      <Modal transparent visible={modalVisible}>
        <TouchableOpacity style={styles.wrapper} onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(!modalVisible)
          }
        }}
        >
          <View style={styles.modalView}>
            <ScrollView>

              <View style={styles.header}>
                <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                  <Icon name='close' type='evil' size={20} />
                </TouchableOpacity>
                <Text style={styles.title}>{modalTitle}</Text>
                <View />
                <View />
                <View />
                <View />
              </View>
              <View style={styles.seperator}></View>
              <View style={styles.modalBody}>
                {modalBody}
              </View>
              {!modalFooter ?
                (
                  <View>
                    <>
                      <View style={styles.footerSeparator} />
                      <View style={styles.footerItems}>
                        <View style={styles.footer}>
                          <Text style={styles.footerText}>Privacy Policy</Text>
                          <View style={styles.termsView} />
                          <Text style={styles.footerText}>Terms of Service</Text>
                        </View>
                      </View>
                    </>
                  </View>
                )
                :
                modalFooter
              }
            </ScrollView>
          </View>
        </TouchableOpacity>

      </Modal>
    </View >
  );
}

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool
}

AppModal.defaultProps = {
  closeOnTouchOutside: true
}
export default AppModal;
