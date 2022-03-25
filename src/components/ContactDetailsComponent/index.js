import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native'
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';
import CommonButton from '../common/CommonButton'
import { DEFAULT_IMAGE_URI } from '../../constants/general';
import ImagePicker from '../common/ImagePicker';
import { CREATE_CONTACT } from '../../constants/routeNames';




const ContactDetailsComponent = ({
  contact,
  sheetRef,
  openSheet,
  onFileSelected,
  localFile,
  deleteContactFunc,
}) => {
  const { setOptions, navigate } = useNavigation()
  const {
    contact_picture,
    first_name,
    last_name,
    phone_number,
  } = contact


  // useEffect(() => {
  //   setOptions({
  //     title: `${first_name} ${last_name}`,
  //     headerRight: () => (
  //       <View style={styles.headerRight}>
  //         <Icon type='ant' name='staro' size={17} color={colors.grey} style={{ paddingRight: 5 }} />
  //         <TouchableOpacity onPress={deleteContactFunc}>
  //           <Icon type='material' name='delete' size={17} color={colors.grey} />
  //         </TouchableOpacity>
  //       </View>
  //     ),
  //   })
  // }, [])

  return (
    <ScrollView style={styles.container}>
      {console.log('Local File', localFile)}
      {console.log('Contact Picture', contact_picture)}
      {contact_picture ? (
        <View>
          <Image style={styles.image} source={{ uri: contact_picture }} height={300} width={'100%'} />
        </View>
      ) : (
        <>
          <Image
            style={styles.imageHolder}
            source={{ uri: localFile?.path || DEFAULT_IMAGE_URI }}
            width={100}
            height={100}
          />
          <TouchableOpacity onPress={openSheet}>
            <Text style={styles.chooseText}>Choose Picture</Text>
          </TouchableOpacity>
        </>
      )}



      <View style={styles.content}>
        <View style={styles.nameWrapper}>
          <Text style={styles.contactName}>{first_name + ' ' + last_name}</Text>
        </View>
        <View style={styles.seperator}></View>

        <View style={styles.actions}>

          <TouchableOpacity style={styles.callCenter}>
            <Icon
              name='call-outline'
              type='ionicon'
              size={28}
              color={colors.primary} />
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.callCenter}>
            <Icon
              name='message-text'
              type='materialCommunity'
              size={28}
              color={colors.primary} />
            <Text style={styles.callText}>Text</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.callCenter}>
            <Icon
              name='video'
              type='materialCommunity'
              size={28}
              color={colors.primary} />
            <Text style={styles.callText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.phonePane}>
          <View style={styles.phoneNoContainer}>
            <Icon
              name='call-outline'
              type='ionicon'
              size={28}
              color={colors.primary}
            />
            <View style={styles.phoneNumber}>

              <Text >{phone_number}</Text>
              <Text>Mobile</Text>
            </View>
          </View>
          <View style={styles.phoneIcons}>
            <Icon
              name='video'
              type='materialCommunity'
              size={28}
              color={colors.primary}
            />
            <Icon
              name='message-text'
              type='materialCommunity'
              size={28}
              color={colors.primary}
            />
          </View>
        </View>

        <CommonButton
          title='Edit Contact'
          primary
          style={styles.button}
          onPress={() => { navigate(CREATE_CONTACT, { contact }) }}
        />

      </View>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </ScrollView>
  );
}

export default ContactDetailsComponent;
