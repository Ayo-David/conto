import React, { useState } from 'react';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import Input from '../common/Input/'
import CommonButton from '../common/CommonButton/'
import styles from './styles';
import Container from '../common/Container';
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from '../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContactComponent = ({
    error,
    form,
    setForm,
    loading,
    onChangeHandler,
    submitForm,
    toggleSwitch,
    sheetRef,
    openSheet,
    localFile,
    onFileSelected,

}) => {

    //console.log("error", error)
    return (
        <View style={styles.wrapper} >
            <Container>

                <Image style={styles.image} source={{ uri: localFile?.path || DEFAULT_IMAGE_URI }} width={100} height={100} />
                <TouchableOpacity onPress={openSheet}>
                    <Text style={styles.chooseText}>Choose Image</Text>
                </TouchableOpacity>
                <Input
                    label='First Name'
                    placeholder='Enter First Name'
                    onChangeText={(val) => { onChangeHandler({ val, name: 'first_name' }) }}
                    error={error?.first_name?.[0]}
                />
                <Input
                    label='Last Name'
                    placeholder='Enter Last Name'
                    onChangeText={(val) => { onChangeHandler({ val, name: 'last_name' }) }}
                    error={error?.last_name?.[0]}
                />
                <Input
                    icon={<CountryPicker
                        withFilter
                        withFlag
                        countryCode={form.phone_code || undefined}
                        withAlphaFilter
                        withCallingCode
                        withEmoji
                        onSelect={(val) => {
                            const calling_code = val.callingCode[0]
                            const phone_code = val.cca2
                            // console.log('Counry', phone)
                            // console.log('Country code', country_code)
                            setForm({ ...form, country_code: calling_code, phone_code })
                        }}

                    />}
                    iconPosition='left'
                    style={{ paddingLeft: 10 }}
                    label='Phone Number'
                    placeholder='Enter Phone Number'
                    onChangeText={(val) => { onChangeHandler({ val, name: 'phone_number' }) }}
                    error={error?.phone_number?.[0]}
                />
                <View style={styles.favourite}>
                    <Text style={styles.favouriteText}>Add to favourites</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: colors.primary }}
                        thumbColor='#FFF'
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={form.is_favorite}
                    />
                </View>
                <CommonButton
                    title='Submit'
                    primary
                    onPress={submitForm}
                    loading={loading}
                    disabled={loading}
                />

            </Container>
            <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
        </View>
    );
}

export default CreateContactComponent;
